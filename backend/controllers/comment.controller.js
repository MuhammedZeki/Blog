import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";


export const createComment = async (req, res) => {
    try {
        const { postId, name, text, parentId } = req.body;

        if (!postId || !name || !text) {
            return res.status(400).json({
                message: "Post, isim ve yorum zorunlu",
            });
        }

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({
                message: "Post bulunamadı",
            });
        }

        const comment = await Comment.create({
            postId,
            name,
            text,
            parentId: parentId || null,
            isApproved: false,
        });

        res.status(201).json({
            message: "Yorum gönderildi, onay bekliyor",
            comment,
        });
    } catch (error) {
        res.status(500).json({
            message: "Yorum oluşturulamadı",
            error: error.message,
        });
    }
};

export const getCommentsByPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const isAdmin = req.query.admin === "true";

        let filter = { postId, isApproved: true };

        if (isAdmin) {
            filter = { postId }; // admin hepsini görür
        }

        const comments = await Comment.find(filter)
            .sort({ createdAt: -1 });

        res.json(comments);
    } catch (error) {
        res.status(500).json({
            message: "Yorumlar alınamadı",
        });
    }
};

export const approveComment = async (req, res) => {
    try {
        const { id } = req.params;

        const comment = await Comment.findByIdAndUpdate(
            id,
            { isApproved: true },
            { new: true }
        );

        if (!comment) {
            return res.status(404).json({
                message: "Yorum bulunamadı",
            });
        }

        res.json({
            message: "Yorum onaylandı",
            comment,
        });
    } catch (error) {
        res.status(500).json({
            message: "Onaylama hatası",
        });
    }
};

export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;

        const comment = await Comment.findByIdAndDelete(id);

        if (!comment) {
            return res.status(404).json({
                message: "Yorum bulunamadı",
            });
        }

        res.json({
            message: "Yorum silindi",
        });
    } catch (error) {
        res.status(500).json({
            message: "Silme hatası",
        });
    }
};