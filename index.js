const express = require("express");
const app=express();
const PORT = 3000;

const {faker} = require("@faker-js/faker");

app.get("/",(req,res)=>{
  res.send("Hi from my express server")
})

app.get("/products",(req,res)=>{
  const products=[];
  const {size} = req.query;
  const limit = size || 10;
  for(let index=0;index<limit;index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl()
    })
  }
  res.json(products)
})

app.get("/products/filter",(req,res)=>{
  res.send("Im a filter")
})

app.get("/products/:id",(req,res)=>{
  const {id} = req.params;
  // const product = products.filter(product=>product.id.toString()===id)[0]
  // console.log("Log",{id, product})
  // res.json(product)
  res.json({
    id,
    name: "Product 2",
    price: 2000
  })
})

app.get("/categories/:categoryId/products/:productId",(req,res)=>{
  const {categoryId, productId} = req.params;
  const product = {
    categoryId,
    productId
  }
  res.json(product)
})

app.get("/users",(req,res)=>{
  const {limit,offset} = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }
  else{
    res.send("No parameters")
  }
})

app.listen(PORT,()=>{
  console.log(`My Port ${PORT}`)
})
