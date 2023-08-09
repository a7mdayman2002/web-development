const express = require("express");
require("../db/mongoose.js");
const student = require ("../models/students.js");
const app =express();
app.use(express.json());


//getting all
app.get("/students",async(req,res)=>{
   try {const students =await student.find({})
    res.status(200).send(students);

    
   } catch (error) {
    res.status(500).send(error.message);
   }
   
})
//getting one by id 
app.get("/students/:id",async(req,res)=>{
   try {
     const students = await student.findById(req.params.id);
     if(students){
        return  res.send(students);
       }
       res.status(404).send("not found");
   } catch (error) {
    res.status(500).send(error.message);
    
   }
       
})
//creating one by id 
app.post("/students",async(req,res)=>{

    const students= new student(req.body);
    try{
        await students.save(); 
        res.status(201).send(students);
    }catch(error){
        res.status(400).send(error.message)
    }

})
    

//updating one by id 
app.put("/students/:id",async(req,res)=>{
    try {
    const students = await student.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(students){
        return res.send(students);

    }
    res.status(404).send("not found");

    } catch (error) {
        res.status(500).send(error.message);
        
    } 
})
//deleting one by id 
app.delete("/students/:id",async(req,res)=>{
   try { 
    const students = await student.findByIdAndDelete(req.params.id);
    if(students){
        return res.send(students);

    }
    res.status(404).send("not found");
   } catch (error) {
    res.status(500).send(error.message);
   }       

})


app.listen(3000,(req,res) => {
    console.log("app is running");
})



