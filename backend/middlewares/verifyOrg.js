import jwt from "jsonwebtoken";

export default async function verifyOrg(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({
        good: false,
        message: "Unauthorized",
      });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_ORG);
      if (!req.userId) {
        return res.status(401).send({
          good: false,
          message: "Unauthorized",
        });
      }
      req.orgId = decoded.orgId;
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
