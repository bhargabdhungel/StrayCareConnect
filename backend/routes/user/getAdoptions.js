import AnimalPost from "../../models/animalPost.js";

const getAdoptions = async (req, res) => {
  try {
    const sponsorAnimalPosts = await AnimalPost.find({
      "postType.adoption": true,
    });
    return res.status(200).json({
      message: "Fetched Adoption posts successfully",
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

export default getAdoptions;
