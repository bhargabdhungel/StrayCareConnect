import AnimalPost from "../../models/animalPost.js";
import Post from "../../models/post.js";

const getPostById = async (req, res) => {
  try {
    const type = req.query.postType;
    const id = req.query.postId;
    console.log(type, id);
    if (type === "Normal") {
      const post = await Post.findById(id);
      return res.status(200).json({
        message: "Fetched post Data successfully",
        data: post,
        good: true,
      });
    }
    const animalPost = await AnimalPost.findById(id);
    return res.status(200).json({
      message: "Fetched post Data successfully",
      data: animalPost,
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
export default getPostById;
