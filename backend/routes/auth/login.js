import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/user.js";

export default async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({
        good: false,
        message: "User does not exist",
        path: "signup",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).send({
        good: false,
        message: "Incorrect password",
      });
    }
    const token = jwt.sign(
      { userId: user._id.toString() },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).send({
      good: true,
      message: "User logged in successfully",
      path: "home",
      save: { token, username: user.username, email: user.email,isAdmin:user.userType.admin,isOrg:user.userType.org },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      good: false,
      message: "Internal server error",
    });
  }
}
