import Post from "../../models/post.js";

export default async function getPosts(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const post = await Post.find({})
      .sort({ createdAt: -1 })
      .skip((page - 1) * 10)
      .limit(10)
      .populate("userId", "username");

    return res.status(200).json({
      data: post,
      good: true,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error",
      good: false,
    });
  }
}
