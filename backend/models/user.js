import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

const user = mongoose.model("User", userSchema);

export default user;
