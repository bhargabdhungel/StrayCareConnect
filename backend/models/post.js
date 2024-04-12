import mongoose from "mongoose";

const Schema = mongoose.Schema;
const PostSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    imageUrl: { type: String },
    likes: { type: Number, default: 0 },
    comments: [
      {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        content: { type: String, required: true },
        likes: { type: Number, default: 0 },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
