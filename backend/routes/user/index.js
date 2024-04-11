import express from "express";
import verifyUser from "../../middlewares/verifyUser.js";
import me from "./me.js";

const router = express.Router();

router.get("/me", verifyUser, me);

export default router;
