import mongoose from "mongoose";

// Comment Schema
const CommentSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  content: { type: String, required: true },
  parentComment: { type: Schema.Types.ObjectId, ref: "Comment" },
  nestedComments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const comment = mongoose.model("Comment", CommentSchema);

export default comment;
