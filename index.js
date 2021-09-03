require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
const usersRouter = require("./users/users-routers");

const PORT = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send("<h1>Module Project 4</h1>");
});

server.get("/api", (req, res) => {
  res.json({ message: "hey, this thing works!" });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
