import express from "express";
import { approveComment, createComment, deleteComment, getCommentsByPost } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", createComment);
router.get("/:postId", getCommentsByPost);
router.put("/:id/approve", approveComment);
router.delete("/delete/:id", deleteComment);

export default router;