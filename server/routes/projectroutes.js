const express=require("express");
const router=express.Router();
const Project=require("../models/Project");
// CREATE project
router.post("/",async(req,res)=>{
    try{
        const project=new Project(req.body);
        await project.save();
        res.status(201).json(project);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
});
// READ all projects
router.get("/",async(req,res)=>{
    try{
        const projects=await Project.find();
        res.json(projects);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
});
// UPDATE project
router.put("/:id",async(req,res)=>{
    try{
        const updatedProject=await Project.findByIdAndUpdate(
            req.params.id,
            req.params.body,
            {new:true}
        );
        res.json(updatedProject);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
});
// DELETE project
router.delete("/:id",async(req,res)=>{
try{
    await Project.findByIdAndDelete(req.params.id);
    res.json({message:"Project deleted successfully"});
}
catch(error){
   res.status(500).json({ error: error.message });
}
});
module.exports=router;
