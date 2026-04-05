import express from "express";
import { createMessage, deleteMessage, getMessages, markAsRead } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/", getMessages);
router.post("/create", createMessage);
router.put("/:id/read", markAsRead);
router.delete("/delete/:id", deleteMessage);

export default router;