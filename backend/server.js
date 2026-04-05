import express from "express";
import dotnenv from "dotenv";


import postRoutes from "./routes/post.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectMongoDB from "./database/data.js";


dotnenv.config();


const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));


app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/messages", messageRoutes);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectMongoDB();
});