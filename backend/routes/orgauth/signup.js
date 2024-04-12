import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import OrgUser from "../../models/orgUser.js";

export default async function signup(req, res) {
  try {
    const { orgname, email, password } = req.body;

    // check if orguser already exists
    const exists = await OrgUser.findOne({ email });
    if (exists) {
      return res.status(400).send({
        good: false,
        message: "Organization already exists",
        path: "orglogin",
      });
    }

    // check if orgname already exists
    const orgnameExists = await OrgUser.findOne({ orgname });
    if (orgnameExists) {
      return res.status(400).send({
        good: false,
        message: "Please choose a different orgname",
      });
    }

    // create new orguser
    const hashedPassword = await bcrypt.hash(password, 10);
    const orguser = new OrgUser({
      orgname,
      email,
      password: hashedPassword,
    });
    await orguser.save();

    const token = jwt.sign({ orgId: orguser._id }, process.env.JWT_SECRET_ORG, {
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
