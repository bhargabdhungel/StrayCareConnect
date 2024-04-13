import AnimalPost from "../../models/animalPost.js";

const getSponsorsPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const sponsorAnimalPosts = await AnimalPost.find({
      "postType.sponsor": true,
    })
      .sort({ createdAt: -1 })
      .skip((page - 1) * 10)
      .limit(10)
      .populate("userId", "username");

    return res.status(200).json({
      message: "Fetched sponsor posts successfully",
      good: true,
      data: sponsorAnimalPosts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default getSponsorsPosts;
