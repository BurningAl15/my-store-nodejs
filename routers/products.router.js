const express = require("express");
const {faker} = require("@faker-js/faker");

const router = express.Router();
let products=[];
const { v4: uuidv4, v5: uuidv5 } = require('uuid');

router.get("/",(req,res)=>{
  const {size} = req.query;
  const limit = size || 10;
  let randomUUID = uuidv4();
  for(let index=0;index<limit;index++){
    products.push({
      id: randomUUID,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl()
    })
    randomUUID = uuidv4();
  }
  res.json(products)
})

router.get("/filter",(req,res)=>{
  res.send("Im a filter")
})

router.get("/:id",(req,res)=>{
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


router.post("/create",(req,res)=>{
  let randomUUID = uuidv4();
  let newProduct = {
    id: randomUUID,
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price()),
    image: faker.image.url()
  }
  products.push(newProduct)
  res.json({products,newProduct, message: "Product Created!"})
})

router.patch("/updateRandom/:id",(req,res)=>{
  const {id} = req.params;
  products = products.map((product)=>{
    if(product.id.toString()===id){
      return {
        id: id,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.url()
      }
    }
    else{
      return product
    }
  })
  res.json({products, message: "Product Created!"})
})

router.delete("/:id",(req,res)=>{
  const {id} = req.params;
  products = products.filter((product)=>{
    if(product.id.toString()!==id){
      return product
    }
  })
  res.json({products, message: "Product Deleted!"})
})

module.exports = router;
