import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/index.js";
import auth from "./routes/auth/index.js";
import user from "./routes/user/index.js";
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config();
const port = process.env.PORT || 3000;

connectDB();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("message", (msg) => {
    // broadcast to all clients
    socket.broadcast.emit("message", msg);
  });

  // socket.on("chat message", (msg) => {
  //   io.emit("chat message", msg);
  // });
});

app.use(cors());
app.use(
  express.json({
    limit: "50mb",
  })
);

// routes
app.use("/auth", auth);
app.use("/user", user);

// default route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.listen(port, () => {
//   console.log("Server is running on port 3000");
// });

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
