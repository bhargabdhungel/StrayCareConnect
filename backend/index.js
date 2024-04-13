import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/index.js";
import auth from "./routes/auth/index.js";
import user from "./routes/user/index.js";
import org from "./routes/org/index.js";
import orgAuth from "./routes/orgauth/index.js";
import bodyParser from "body-parser";

dotenv.config();
const port = process.env.PORT || 3000;

connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// routes
app.use("/auth", auth);
app.use("/user", user);
app.use("/org", org);
app.use("/orgAuth", orgAuth);

// default route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
