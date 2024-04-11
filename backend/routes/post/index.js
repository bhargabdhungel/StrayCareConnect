import express from "express";
import verifyUser from "../../middlewares/verifyUser.js";
import addPostController from "./addPost.js";


const postRouter = express.Router();

postRouter.post("/addPost", verifyUser, addPostController);

export default postRouter;
