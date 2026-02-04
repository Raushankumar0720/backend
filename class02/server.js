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

app.get("/users/:test/:users_id", (req, res) => {
    console.log("this is req",req.params);
    console.log("this is req",req);
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

app.listen(3000,()=>{
    console.log("this is running on port : 3000");
})