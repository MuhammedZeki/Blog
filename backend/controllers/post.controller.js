import Category from "../models/category.model.js";
import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
    try {
        const { title, content, category, imageUrl, isHome } = req.body;

        if (!title || !content || !category) {
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
            content,
            category,
            imageUrl,
            isHome: isHome || false,
        });

        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({
            message: "Post oluşturulamadı",
            error: error.message,
        });
    }
}