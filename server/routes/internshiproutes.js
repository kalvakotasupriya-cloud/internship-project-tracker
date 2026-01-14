const express = require("express");
const router = express.Router();
const Internship = require("../models/Internship");

router.get("/", async (req, res) => {
  res.json([]);
});

router.post("/", async (req, res) => {
  try {
    const internship = new Internship(req.body);
    await internship.save();
    res.status(201).json(internship);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
