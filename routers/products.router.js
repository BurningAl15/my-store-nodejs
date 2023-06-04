const express = require("express");
const router = express.Router();

const ProductService = require("../services/product.service")
const service = new ProductService();

router.get("/",(req,res)=>{
  const products = service.find();
  res.json({length:products.length,products})
})

router.get("/filter",(req,res)=>{
  res.send("Im a filter")
})

router.get("/:id",(req,res)=>{
  const {id} = req.params;
  const product = service.findOne(id);
  console.log("Log",{id, product})
  if(product !== undefined)
    res.status(200).json(product)
  else
    res.status(404).json({message:"Product not found"})
})

router.post("/createRandom",(req,res)=>{
  let newProduct = service.createRandom()
  res.status(201).json({newProduct, message: "Product Created!"})
})

router.post("/create",(req,res)=>{
  const body = req.body;
  let newProduct = service.create(body)
  res.status(201).json({newProduct, message: "Product Created!"})
})

router.patch("/updateRandom/:id",(req,res)=>{
  const {id} = req.params;
  const products = service.updateRandom(id);
  res.json({products, message: "Product Updated!"})
})

router.patch("/update/:id",(req,res)=>{
  const body = req.body;
  const {id} = req.params;
  const products = service.update(id,body);
  res.json({products, message: "Product Updated!"})
})

router.delete("/:id",(req,res)=>{
  const {id} = req.params;
  const products = service.delete(id);
  res.json({products, message: "Product Deleted!"})
})

module.exports = router;
