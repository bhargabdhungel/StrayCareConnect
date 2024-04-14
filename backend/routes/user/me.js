import User from "../../models/user.js";

export default async function me(req, res) {
  try {
    const user = await User.findById(req.userId).populate([
      "animalPosts",
      "likedPosts",
    ]);
    if (!user) {
      return res.status(404).send({
        good: false,
        message: "User not found",
      });
    }

    return res.status(200).send({
      good: true,
      message: "User found successfully",
      data: {
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        org: user.userType.org,
        admin: user.userType.admin,
        followers: user.followers,
        following: user.following,
        animalPosts: user.animalPosts,
        likedPosts: user.likedPosts,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      good: false,
      message: "Internal server error",
    });
  }
}
