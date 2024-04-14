import express from "express";
import verifyUser from "../../middlewares/verifyUser.js";
import me from "./me.js";
import getPosts from "./getPost.js";
import addPost from "./addPost.js";
import getAllOrgs from "./getAllOrgs.js";
import getSponsors from "./getSponsors.js";
import getAdoptions from "./getAdoptions.js";
import verifyOrg from "../../middlewares/verifyOrg.js";
import addSponsorPost from "./addSponsorPost.js";
import postAdoption from "./postAdoption.js";
import applyForMembership from "./applyForMembership.js";
import getPostById from "./getPostById.js";

const userRouter = express.Router();

userRouter.get("/me", verifyUser, me);
userRouter.get("/posts", verifyUser, getPosts);
userRouter.get("/sponsor", verifyUser, getSponsors);
userRouter.post("/sponsor", verifyOrg, addSponsorPost);
userRouter.post("/post", verifyUser, addPost);
userRouter.get("/orgs", verifyUser, getAllOrgs);
userRouter.get("/adopt", verifyUser, getAdoptions);
userRouter.post("/adopt", verifyUser, postAdoption);
userRouter.get("/post", verifyUser, getPostById);
userRouter.post("/applyForMembership", verifyUser, applyForMembership);

export default userRouter;
