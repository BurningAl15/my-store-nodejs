const express = require("express");
const app=express();
const PORT = 3000;

app.get("/",(req,res)=>{
  res.send("Hi from my express server")
})

app.listen(PORT,()=>{
  console.log(`My Port ${PORT}`)
})
