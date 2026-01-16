const express = require("express");
const router = express.Router();
const Internship = require("../models/Internship");

router.get("/", async (req, res) => {
  try {
    console.log("GET /internships called"); 
    const internships = await Internship.find();
    res.json(internships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/", async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const internship = new Internship(req.body);
    await internship.save();
    res.status(201).json(internship);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.delete("/:id",async(req,res)=>{
try{
    await Internship.findByIdAndDelete(req.params.id);
    res.json({message:"Internship deleted successfully"});
}
catch(error){
    res.status(500).json({message:error.message});
}
});
// UPDATE internship by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedInternship = await Internship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedInternship);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
