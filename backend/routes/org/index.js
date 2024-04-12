import express from "express";
import verifyOrg from "../../middlewares/verifyOrg.js";
import OrgPost from "../../models/orgPost.js";

const router = express.Router();

router.get("/us", verifyOrg, async (req, res) => {});

router.post("/sponsor", verifyOrg, async (req, res) => {
  try {
    const orgId = req.orgId;
    const { name, gender, image, age, animalType, description, monthlyBudget } =
      req.body;
    if (
      !name ||
      !gender ||
      !image ||
      !age ||
      !animalType ||
      !description ||
      !monthlyBudget
    ) {
      return res
        .status(400)
        .json({ message: "All fields are required", good: false });
    }

    // Create a new post
    const newPost = new OrgPost({
      name,
      gender,
      image,
      age,
      animalType,
      description,
      monthlyBudget,
      orgId,
    });
    await newPost.save();

    return res.status(201).json({
      message: "Post created successfully",
      good: true,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal server error", good: false });
  }
});

router.get("/sponsor", verifyOrg, async (req, res) => {
  try {
    const orgId = req.orgId;
    const posts = await OrgPost.find({ orgId });
    return res.status(200).json({ data: posts, good: true });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal server error", good: false });
  }
});

export default router;
