import express from "express";
import verifyOrg from "../../middlewares/verifyOrg.js";
import orgUser from "../../models/orgUser.js";

const router = express.Router();

router.get("/us", verifyOrg, async (req, res) => {});

export default router;
