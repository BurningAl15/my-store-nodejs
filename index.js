const express = require("express");
const app=express();
const PORT = 3000;

const routerApi = require("./routers");

app.get("/",(req,res)=>{
  res.send("Hi from my express server")
})

routerApi(app);

app.listen(PORT,()=>{
  console.log(`My Port ${PORT}`)
})
