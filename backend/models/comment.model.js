import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        isApproved: {
            type: Boolean,
            default: false,
        },
        parentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
            default: null,
        },
    },
    { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;