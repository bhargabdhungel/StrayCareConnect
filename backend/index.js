import express from "express";
import { config } from "dotenv";
import cors from "cors";
import connectDB from "./database/index.js";

const app = express();
app.use(cors());
app.use(express.json());
config();

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
