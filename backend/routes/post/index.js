import express from "express";
import verifyUser from "../../middlewares/verifyUser.js";
import addPostController from "./addPost.js";
import getPostController from "./getPost.js";


const postRouter = express.Router();

postRouter.post("/addPost", verifyUser, addPostController);
postMessage.get("/posts/page/:page", verifyUser, getPostController);

export default postRouter;
