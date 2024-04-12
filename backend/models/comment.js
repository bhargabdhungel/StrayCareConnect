import mongoose from "mongoose";

// Comment Schema
const CommentSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  parentComment: { type: Schema.Types.ObjectId, ref: "Comment" },
  nestedComments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
