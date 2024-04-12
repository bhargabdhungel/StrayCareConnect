import express from "express";
import verifyUser from "../../middlewares/verifyUser.js";
import me from "./me.js";
import addPost from "./addPost.js";
import Post from "../../models/post.js";
import getPost from "./getPost.js";
import getAllOrgs from "./getAllOrgs.js";

const router = express.Router();

router.get("/me", verifyUser, me);
router.post("/post", verifyUser, addPost);
router.get("/posts", verifyUser, getPost);
router.get("/allOrgs", verifyUser, getAllOrgs)

export default router;
