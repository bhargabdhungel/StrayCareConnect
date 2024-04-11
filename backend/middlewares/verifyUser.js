import jwt from "jsonwebtoken";

export default async function verifyUser(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({
        good: false,
        message: "Unauthorized",
      });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.userId;
    } catch (err) {
      return res.status(401).send({
        good: false,
        message: "Unauthorized",
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
