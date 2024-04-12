import Post from "../../models/post.js";

const getPostController = async (req, res) => {
  try {
    const pageSize = 10;
      const skip = (req.params.page - 1) * pageSize;
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(skip) 
        .limit(pageSize);
      return res.status(200).json({
          success: true,
          message: 'Fetched posts successfully',
          posts
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default getPostController;
