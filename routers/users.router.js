const express = require("express");
const router = express.Router();

const UserService = require("../services/user.service");
const service = new UserService();

router.get("/",(req,res)=>{
  const users = service.find();
  res.json({length:users.length,users})
})

router.get("/:id",(req,res)=>{
  const {id} = req.params;
  const user = service.findOne(id);
  if(user !== undefined)
    res.status(200).json(user)
  else
    res.status(404).json({message:"user not found"})
})

router.post("/create",(req,res)=>{
  let newUser = service.create()
  res.status(201).json({newUser, message: "User Created!"})
})

router.patch("/updateRandom/:id",(req,res)=>{
  const {id} = req.params;
  const users = service.update(id);
  res.json({users, message: "User Updated!"})
})

router.delete("/:id",(req,res)=>{
  const {id} = req.params;
  const users = service.delete(id);
  res.json({users, message: "Product Deleted!"})
})

module.exports = router;
