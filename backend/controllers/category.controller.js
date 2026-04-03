import Category from "../models/category.model.js";

export const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: "Kategori adı zorunlu" });
        }

        const slug = name.toLowerCase().replace(/\s+/g, "-");

        const existing = await Category.findOne({ slug });
        if (existing) {
            return res.status(400).json({ message: "Bu kategori zaten var" });
        }

        const category = await Category.create({ name, slug });

        res.status(201).json({ category, message: "Kategori oluşturuldu" });
    } catch (error) {
        res.status(500).json({ message: "Kategori oluşturulamadı" });
    }
};

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ createdAt: -1 });
        res.status(200).json({ categories, message: "Kategoriler başarıyla alındı" });
    } catch (error) {
        res.status(500).json({ message: "Kategoriler alınamadı" });
    }
};

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const slug = name.toLowerCase().replace(/\s+/g, "-");

        const updated = await Category.findByIdAndUpdate(
            id,
            { name, slug },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Kategori bulunamadı" });
        }

        res.status(200).json({ updated, message: "Güncelleme başarılı" });
    } catch (error) {
        res.status(500).json({ message: "Güncelleme hatası" });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await Category.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: "Kategori bulunamadı" });
        }

        res.status(200).json({ message: "Kategori silindi" });
    } catch (error) {
        res.status(500).json({ message: "Silme hatası" });
    }
};