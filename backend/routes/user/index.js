import express from "express";
import verifyUser from "../../middlewares/verifyUser.js";
import me from "./me.js";
import addPost from "./addPost.js";
import Post from "../../models/post.js";

const router = express.Router();

router.get("/me", verifyUser, me);
router.post("/addPost", verifyUser, addPost);
router.get("/posts", verifyUser, async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const post = await Post.find({})
    .sort({ createdAt: -1 })
    .skip((page - 1) * 10)
    .limit(10)
    .populate("userId", "username")
    .populate("comments");

  return res.status(200).json({ data: post, good: true });
});

export default router;
