const mongoose=require("mongoose");
const projectSchema=new mongoose.Schema({
title:{
    type:String,
    required:true
},
techstack:{
    type:String
},
status:{
    type:String,
    default:"In Progress"
},
createdAt:{
    type:Date,
    default:Date.now
}
});
module.exports=mongoose.model("Project",projectSchema);