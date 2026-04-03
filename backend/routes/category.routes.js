import express from "express";
import { createCategory, deleteCategory, getCategories, updateCategory } from "../controllers/category.controller.js";

const router = express.Router();

router.get("/", getCategories)
router.post("/create", createCategory)
router.put("/update/:id", updateCategory)
router.delete("/delete/:id", deleteCategory)

export default router;