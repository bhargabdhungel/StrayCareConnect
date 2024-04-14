import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  animalPosts: [{ type: Schema.Types.ObjectId, ref: "AnimalPost" }],
  likedPosts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  countOfFollowers: { type: Number, default: 0 },
  countOfFollowing: { type: Number, default: 0 },
  image: { type: String },
  address: { type: String },
  goal: { type: String },
  contactNo: { type: Number },
  userType: {
    type: {
      user: Boolean,
      org: Boolean,
      admin: Boolean,
    },
    default: {
      user: true,
      admin: false,
      org: false,
    },
  },
});

const User = mongoose.model("User", userSchema);

export default User;
