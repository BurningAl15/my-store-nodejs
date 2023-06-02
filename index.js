const express = require("express");
const app=express();
const PORT = 3000;

let products = [
  {
    id:0,
    name: "Product1",
    price: 1000
  },
  {
    id:1,
    name: "Product2",
    price: 2000
  },
]

app.get("/",(req,res)=>{
  res.send("Hi from my express server")
})

app.get("/products",(req,res)=>{
  res.json(products)
})

app.get("/products/:id",(req,res)=>{
  const {id} = req.params;
  const product = products.filter(product=>product.id.toString()===id)[0]
  console.log("Log",{id, product})
  res.json(product)
})

app.get("/categories/:categoryId/products/:productId",(req,res)=>{
  const {categoryId, productId} = req.params;
  const product = {
    categoryId,
    productId
  }
  res.json(product)
})

app.listen(PORT,()=>{
  console.log(`My Port ${PORT}`)
})
