import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/orgUser.js";

export default async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({
        good: false,
        message: "Organization does not exist",
        path: "orgsignup",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).send({
        good: false,
        message: "Incorrect password",
      });
    }

    const token = jwt.sign({ orgId: user._id }, process.env.JWT_SECRET_ORG, {
      expiresIn: "7d",
    });

    return res.status(200).send({
      good: true,
      message: "Organization logged in successfully",
      path: "orghome",
      save: { token, username: user.username, email: user.email },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      good: false,
      message: "Internal server error",
    });
  }
}
