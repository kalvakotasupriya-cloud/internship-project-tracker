const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const internshipRoutes = require("./routes/internshiproutes"); 
const projectRoutes = require("./routes/projectroutes");
const app = express();

app.use(cors());
app.use(express.json());

//MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/internshipTracker")
  .then(() => console.log("MongoDB connected "))
  .catch(err => console.error("MongoDB connection error", err));

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.use("/internships", internshipRoutes);
app.use("/projects", projectRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
