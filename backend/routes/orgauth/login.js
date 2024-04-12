import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import OrgUser from "../../models/orgUser.js";

export default async function login(req, res) {
  try {
    const { email, password } = req.body;

    const org = await OrgUser.findOne({ email });
    if (!org) {
      return res.status(400).send({
        good: false,
        message: "Organization does not exist",
        path: "orgsignup",
      });
    }

    const match = await bcrypt.compare(password, org.password);
    if (!match) {
      return res.status(400).send({
        good: false,
        message: "Incorrect password",
      });
    }

    const token = jwt.sign(
      { orgId: org._id.toString() },
      process.env.JWT_SECRET_ORG,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).send({
      good: true,
      message: "Organization logged in successfully",
      path: "orghome",
      save: { token, orgname: org.orgname, email: org.email },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      good: false,
      message: "Internal server error",
    });
  }
}
