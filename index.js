const express = require("express");
const routerApi = require("./routers");

const {logErrors, errorHandler} = require('./middlewares/error.handler')

const app=express();
const PORT = 3000;


app.use(express.json());

app.get("/",(req,res)=>{
  res.send("Hi from my express server")
})

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(PORT,()=>{
  console.log(`My Port ${PORT}`)
})
