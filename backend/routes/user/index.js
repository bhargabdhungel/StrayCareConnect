import express from "express";
import verifyUser from "../../middlewares/verifyUser.js";
import me from "./me.js";
import addPost from "./addPost.js";
import post from "../../models/post.js";

const router = express.Router();

router.get("/me", verifyUser, me);
router.post("/addPost", verifyUser, addPost);
router.get("/posts/:page", verifyUser, (req, res) => {
  const { page } = req.params;
  // const posts
  res.json({ data: posts });
});

export default router;
