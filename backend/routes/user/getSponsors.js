import AnimalPost from "../../models/animalPost.js";

const getSponsorsPosts = async (req,res) => {
  try {
    const sponsorAnimalPosts = await AnimalPost.find({
      "postType.sponsor": true,
    });
    return res.status(200).json({
      message: "Fetched sponsor posts successfully",
      good: true,
      sponsorAnimalPosts,
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
