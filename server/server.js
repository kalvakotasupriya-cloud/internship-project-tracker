const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("server is running");
});
app.listen(5000,()=>{
    console.log("start server on portno 5000");
});