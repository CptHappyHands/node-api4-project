const express = require("express");

const router = express.Router();

const users = [
  { name: "Frodo Baggins" },
  { name: "Samwise Gamgee" },
  { name: "Meriadoc Brandybuck" },
  { name: "Peregrin Took" },
  { name: "Mithrandir" },
  { name: "Boromir" },
  { name: "Legolas" },
  { name: "Gimli" },
  { name: "Aragorn" },
];

router.get("/users", (req, res) => {
  res.status(200).json(users);
});

router.post("/register", (req, res) => {
  const { name } = req.body;
  if (!name || !name.trim()) {
    res.status(400).json({ message: "name required" });
  } else {
    return (req.name = name.trim());
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "username and password required" });
  } else {
    return "Welcome traveller, to the Inn of the Prancing Pony";
  }
});

module.exports = router;
