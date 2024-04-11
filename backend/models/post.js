import mongoose from "mongoose";

const Schema = mongoose.Schema;
const PostSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    imageUrl: { type: String },
    likes: { type: Number,default:0 },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);  

const post = mongoose.model("Post", PostSchema);

export default post;
