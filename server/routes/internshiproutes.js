const express = require("express");
const router = express.Router();
const Internship = require("../models/Internship");

// CREATE internship (POST)
router.post("/", async (req, res) => {
  console.log("POST /internships called");
  console.log("Request body:", req.body);

  try {
    const internship = new Internship(req.body);
    await internship.save();
    res.status(201).json(internship);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ all internships (GET)
router.get("/", async (req, res) => {
  console.log("GET /internships called");
  const internships = await Internship.find();
  res.json(internships);
});

module.exports = router;
