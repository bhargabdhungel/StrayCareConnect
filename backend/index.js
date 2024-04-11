import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/index.js";

dotenv.config();
const port = process.env.PORT || 3000;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
