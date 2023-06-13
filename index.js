const express = require("express");
const routerApi = require("./routers");

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')

const cors = require('cors');
const app=express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
  res.send("Hi from my express server")
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT,()=>{
  console.log(`My Port ${PORT}`)
})
