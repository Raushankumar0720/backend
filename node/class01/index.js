const express = require("express");
// import express from "express";



const app = express();

app.use(express.json());



const users = [
    { id: 1, name: "Arjun", role: "student" },
    { id: 2, name: "Priyesha", role: "mentor" },
    { id: 2, name: "rk", role: "student" },
    { id: 2, name: "ankit", role: "mentor" }
];


app.get("/", (req, res) => {
    res.status(200).send("home page");
});

app.get("/gallery", (req, res) => {
    res.send("this is my gallery section");
    res.status(500);
})

app.get("/even-odd", (req, res) => {
    // res.status(200).send("even odd");
    res.status(201).json({ "key": "value" });
});

app.get("/users", (req, res) => {
    res.status(200).json(users);
});



app.get("/users/:id", (req, res) => {
    const userId = Number(req.params.id);
    const user = users.find(u => u.id === userId);
    console.log("User:",users);

  
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  
    res.status(200).json(user);
  });


  app.post("/users", (req, res) => {
    const newUser = {
      id: req.body.id,
      name: req.body.name,
      role: req.body.role
    };
  
    users.push(newUser);
  
    res.status(201).json({
      message: "User created",
      user: newUser
    });
  });
  

app.get("/class",(req,res)=>{
    // res.status(200).json({"key":"value"});
    res.status(200).send("backend lecture");
})

app.listen(3000, () => {
    console.log("Servers started on port 3000");
});



// app.get("/users/:id", (req, res) => {
//     const userId = Number(req.params.id);
//     const user = users.find(u => u.id === userId);
  
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
  
//     if (req.body.name) user.name = req.body.name;
//     if (req.body.role) user.role = req.body.role;
  
//     res.status(200).json({
//       message: "User updated",
//       user
//     });
//   });