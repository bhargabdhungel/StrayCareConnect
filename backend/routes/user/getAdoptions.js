import AnimalPost from "../../models/animalPost.js";

const getAdoptions = async (req, res) => {
  try {
     const page = parseInt(req.query.page) || 1;
    const AdoptAnimalPosts = await AnimalPost.find({
      "postType.adoption": true,
    })
      .sort({ createdAt: -1 })
      .skip((page - 1) * 10)
      .limit(10)
      .populate("userId", "username");
    return res.status(200).json({
      message: "Fetched Adoption posts successfully",
      good: true,
      data:AdoptAnimalPosts,
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
