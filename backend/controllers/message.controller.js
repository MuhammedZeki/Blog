import Message from "../models/message.model.js";

export const createMessage = async (req, res) => {
    try {
        const { name, email, text } = req.body;

        if (!name || !email || !text) {
            return res.status(400).json({
                message: "Tüm alanlar zorunlu",
            });
        }

        const message = await Message.create({
            name,
            email,
            text,
        });

        res.status(201).json({
            message: "Mesaj alındı",
            data: message,
        });
    } catch (error) {
        res.status(500).json({
            message: "Mesaj gönderilemedi",
        });
    }
};

export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });

        res.json(messages);
    } catch (error) {
        res.status(500).json({
            message: "Mesajlar alınamadı",
        });
    }
};

export const markAsRead = async (req, res) => {
    try {
        const { id } = req.params;

        const message = await Message.findByIdAndUpdate(
            id,
            { isRead: true },
            { new: true }
        );

        res.json(message);
    } catch (error) {
        res.status(500).json({
            message: "Güncellenemedi",
        });
    }
};

export const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;

        await Message.findByIdAndDelete(id);

        res.json({ message: "Silindi" });
    } catch (error) {
        res.status(500).json({
            message: "Silinemedi",
        });
    }
};