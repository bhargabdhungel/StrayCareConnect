import AnimalPost from "../../models/animalPost.js";
import uploadBase64ToCloudinary from "../../utils/imageUpload.js";
import User from "../../models/user.js";

const addSponsorPost = async (req, res) => {
  try {
    const { Name, age, gender, image, description, animalType, monthlyBudget } =
      req.body;
    const base64Image = image?.split(",")[1];

    const filename = `sponsorImage/${req.userId}.jpeg`;

    var urlLink;
    if (base64Image !== undefined) {
      urlLink = await uploadBase64ToCloudinary(base64Image, filename);
    }
    const sponsorPost = new AnimalPost({
      name: Name,
      age,
      gender,
      animalType,
      monthlyBudget,
      image: urlLink,
      description,
      animalType,
      monthlyBudget,
      postType: { adoption: false, sponsor: true },
      userId: req.userId,
    });
    const savedPost = await sponsorPost.save();
    await User.findByIdAndUpdate(
      req.userId,
      { $push: { animalPosts: savedPost._id } }, // Add postId to the animalPosts array
      { new: true } // Return the updated document
    );

    return res.status(200).json({
      message: "Sponsor Post added successfully",
      good: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default addSponsorPost;
