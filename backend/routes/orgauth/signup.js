import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/orgUser.js";

export default async function signup(req, res) {
  try {
    const { orgname, email, password } = req.body;

    // check if user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).send({
        good: false,
        message: "Organization already exists",
        path: "orglogin",
      });
    }

    // check if orgname already exists
    const orgnameExists = await User.findOne({ orgname });
    if (orgnameExists) {
      return res.status(400).send({
        good: false,
        message: "Please choose a different orgname",
      });
    }

    // create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      orgname,
      email,
      password: hashedPassword,
    });
    await user.save();

    const token = jwt.sign({ orgId: user._id }, process.env.JWT_SECRET_ORG, {
      expiresIn: "7d",
    });

    return res.status(201).send({
      good: true,
      message: "Organization created successfully",
      path: "orghome",
      save: { token, orgname, email },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      good: false,
      message: "Internal server error",
    });
  }
}
