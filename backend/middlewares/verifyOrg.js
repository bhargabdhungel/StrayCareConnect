import jwt from "jsonwebtoken";
import User from "../models/user.js";

export default async function verifyOrg(req, res, next) {
  try {
    const token = req.headers.authorization;

    if (!token) {
      console.log(token);
      return res.status(401).send({
        good: false,
        message: "Unauthorized",
      });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!decoded.userId) {
        return res.status(401).send({
          good: false,
          message: "Unauthorized",
        });
      }
      req.userId = decoded.userId;
    } catch (err) {
      return res.status(401).send({
        good: false,
        message: "Unauthorized",
      });
    }
    const org = await User.findById(req.userId);
    // console.log(org);
    if (!org.userType.org) {
      return res.status(401).send({
        good: false,
        message: "You are not an organization",
      });
    }
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      good: false,
      message: "Internal server error",
    });
  }
}
