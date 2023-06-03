const express = require("express");
const {faker} = require("@faker-js/faker");

const router = express.Router();
let products=[];

router.get("/",(req,res)=>{
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
  let newProduct = {
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price()),
    image: faker.image.imageUrl()
  }
  products.push(newProduct)
  res.json({products,newProduct, message: "Product Created!"})
})

router.patch("/updateRandom/:id",(req,res)=>{
  const {id} = req.params;
  products = products.map((product,index)=>{
    if(index.toString()===id){
      return {
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl()
      }
    }
    else{
      return product
    }
  })
  res.json({products, message: "Product Created!"})
})

module.exports = router;
