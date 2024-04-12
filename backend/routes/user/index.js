import express from "express";
import verifyUser from "../../middlewares/verifyUser.js";
import me from "./me.js";
import addPost from "./addPost.js";
import Post from "../../models/post.js";
import getPost from "./getPost.js";
import getAllOrgs from "./getAllOrgs.js";
import getSponsors from "./getSponsors.js";

const router = express.Router();

router.get("/me", verifyUser, me);
router.post("/post", verifyUser, addPost);
router.get("/posts", verifyUser, getPost);
router.get("/orgs", verifyUser, getAllOrgs);
router.get('/sponsors', verifyUser, getSponsors);

export default router;
