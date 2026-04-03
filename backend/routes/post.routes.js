import express from "express";
import {
    createPost,
    deletePost,
    getFeaturedPost,
    getPostByCategory,
    getPostById,
    getPosts,
    searchPosts,
    updatePost
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/search", searchPosts);
router.get("/:id", getPostById);
router.get("/featured", getFeaturedPost);
router.get("/category/:slug", getPostByCategory);

router.put("/update/:id", updatePost);

router.post("/create", createPost)

router.delete("/delete/:id", deletePost);

export default router;