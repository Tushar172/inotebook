const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
