import Post from "../../models/post.js";
import uploadBase64ToCloudinary from "../../utils/imageUpload.js";

export default async function addPostController(req, res) {
  try {
    const { content } = req.body;
    const base64Image = req.body.image;
    const filename = `postImage/${req.userId}.jpeg`;

    var urlLink;
    if (base64Image !== undefined) {
      urlLink = await uploadBase64ToCloudinary(base64Image, filename);
    }
    await Post.create({
      userId: req.userId,
      content,
      imageUrl: urlLink,
    });
    return res.status(200).json({
      success: true,
      message: "Post created successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      good: false,
      message: "Internal server error",
    });
  }
}