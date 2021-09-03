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

router.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

module.exports = router;
