import express from "express";
import signup from "./signup.js";
import login from "./login.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;
