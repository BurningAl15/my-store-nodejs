const express = require("express");
const app=express();
const PORT = 3000;

app.get("/",(req,res)=>{
  res.send("Hi from my express server")
})

app.get("/new",(req,res)=>{
  res.json({
    name: "Aldhair",
    price: 1000
  })
})

app.listen(PORT,()=>{
  console.log(`My Port ${PORT}`)
})
