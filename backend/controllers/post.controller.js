import Post from "../models/post.model.js";
import Category from "../models/category.model.js";

export const createPost = async (req, res) => {
    try {
        const { title, subTitle, content, category, imageUrl, isHome, status } = req.body;

        if (!title || !content || !category || !subTitle) {
            return res.status(400).json({
                message: "Başlık, içerik ve kategori zorunlu",
            });
        }

        const existingCategory = await Category.findById(category);
        if (!existingCategory) {
            return res.status(404).json({
                message: "Kategori bulunamadı",
            });
        }

        if (isHome) {
            await Post.updateMany(
                { isHome: true },
                { isHome: false }
            );
        }

        const post = await Post.create({
            title,
            subTitle,
            content,
            category,
            imageUrl,
            status: status || "draft",
            isHome: isHome || false,
        });

        res.status(201).json({ post, message: "Post oluşturuldu" });
    } catch (error) {
        res.status(500).json({
            message: "Post oluşturulamadı",
            error: error.message,
        });
    }
}

export const getPosts = async (req, res) => {
    try {
        const isAdminRequest = req.query.admin === "true";

        let filter = { status: "published" };

        if (isAdminRequest) {
            filter = {}; //hepsini getir
        }

        const posts = await Post.find(filter)
            .populate("category", "name slug")
            .sort({ createdAt: -1 });

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message: "Postlar alınamadı",
            error: error.message
        });
    }
};

export const getFeaturedPost = async (req, res) => {
    try {
        const post = await Post.findOne({ isHome: true, status: "published" }) // Öne çıkan blog için
            .populate("category", "name slug");

        res.json(post);
    } catch (error) {
        res.status(500).json({
            message: "Featured post alınamadı",
        });
    }
};

export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const isAdminRequest = req.query.admin === "true";

        const post = await Post.findById(id)
            .populate("category", "name slug");

        if (!post) {
            return res.status(404).json({ message: "Post bulunamadı" });
        }

        if (post.status === "draft" && !isAdminRequest) {
            return res.status(403).json({
                message: "Bu yazı henüz yayınlanmamış. Erişme yetkiniz yok."
            });
        }

        res.json(post);
    } catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(400).json({ message: "Geçersiz Post ID formatı" });
        }
        res.status(500).json({ message: "Post alınırken sunucu hatası oluştu" });
    }
};

export const getPostByCategory = async (req, res) => {
    try {
        const { slug } = req.params;
        const isAdminRequest = req.query.admin === "true";

        const category = await Category.findOne({ slug });

        if (!category) {
            return res.status(404).json({ message: "Kategori bulunamadı" });
        }

        let filter = { category: category._id, status: "published" };

        if (isAdminRequest) {
            filter = { category: category._id }; // Admin ise taslaklar da gelsin
        }

        const posts = await Post.find(filter)
            .populate("category")
            .sort({ createdAt: -1 });

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, subTitle, content, category, imageUrl, isHome, status } = req.body;

        const currentPost = await Post.findById(id);
        if (!currentPost) {
            return res.status(404).json({ message: "Güncellenecek post bulunamadı" });
        }

        const willBeHome = isHome ?? currentPost.isHome;
        const willBeStatus = status ?? currentPost.status;

        if (willBeHome === true && willBeStatus === "draft") {
            return res.status(400).json({
                message: "Öne çıkan Anasayfada bir yazıyı taslağa çekemezsiniz.",
                suggestion: "Bu yazıyı taslak yapmak istiyorsanız, önce başka bir yazıyı 'Öne Çıkan' olarak işaretleyin."
            });
        }

        if (currentPost.isHome === true && isHome === false) {
            return res.status(400).json({
                message: "Anasayfada en az bir öne çıkan post olmalıdır.",
                suggestion: "Başka bir yazıyı öne çıkan yapmadan bunu kapatamazsınız."
            });
        }

        if (isHome === true) {
            await Post.updateMany(
                { _id: { $ne: id }, isHome: true },
                { isHome: false }
            );
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            {
                title,
                subTitle,
                content,
                category,
                imageUrl,
                isHome: isHome ?? currentPost.isHome,
                status: status ?? currentPost.status,
            },
            { new: true, runValidators: true }
        ).populate("category", "name slug");

        res.status(200).json({
            post: updatedPost,
            message: "Post başarıyla güncellendi"
        });
    } catch (error) {
        res.status(500).json({
            message: "Post güncellenirken bir hata oluştu",
            error: error.message,
        });
    }
};

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({ message: "Silinecek post bulunamadı" });
        }

        if (post.isHome === true && post.status === "published") {
            return res.status(400).json({
                message: "Anasayfada yayında olan öne çıkan postu silemezsiniz.",
                suggestion: "Bu postu silmek için önce başka bir postu 'Öne Çıkan' (isHome) olarak işaretleyip yayınlayın."
            });
        }

        await Post.findByIdAndDelete(id);

        res.status(200).json({ message: "Post başarıyla silindi" });
    } catch (error) {
        res.status(500).json({
            message: "Post silinirken bir hata oluştu",
            error: error.message,
        });
    }
};

export const searchPosts = async (req, res) => {
    try {
        const { q } = req.query;

        if (!q) {
            return res.status(400).json({ message: "Arama terimi boş olamaz" });
        }

        const posts = await Post.find({
            title: { $regex: q, $options: "i" },
            status: "published"
        })
            .populate("category", "name slug")
            .sort({ createdAt: -1 });

        res.json(posts);
    } catch (error) {
        res.status(500).json({
            message: "Arama yapılırken bir hata oluştu",
            error: error.message
        });
    }
};