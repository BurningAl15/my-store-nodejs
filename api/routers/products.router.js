const express = require("express");
const router = express.Router();

const ProductService = require("../services/product.service")
const service = new ProductService();
const validatorHandler = require('./../middlewares/validator.handler');
const {createProductSchema, updateProductSchema, getProductSchema} = require('./../schemas/product.schema');

router.get("/",async (req,res)=>{
  const products = await service.find();
  res.json({length:products.length,products})
})

// router.get("/filter",(req,res)=>{
//   res.send("Im a filter")
// })

router.get("/:id",
  validatorHandler(getProductSchema, 'params'),
  async (req,res, next)=>{
    try{
      const {id} = req.params;
      const product = await service.findOne(id);
      if(product !== undefined)
        res.status(200).json(product)
      else
        res.status(404).json({message:"Product not found"})
    }catch(err){
      next(err);
    }
})

router.post("/createRandom",
  async (req,res)=>{
    let newProduct = await service.createRandom()
    res.status(201).json({newProduct, message: "Product Created!"})
})

router.post("/create",
  validatorHandler(createProductSchema, 'body'),
  async (req,res)=>{
    const body = req.body;
    let newProduct = await service.create(body)
    res.status(201).json({newProduct, message: "Product Created!"})
})

router.patch("/updateRandom/:id",
  validatorHandler(updateProductSchema, 'params'),
  async (req,res, next)=>{
    try{
      const {id} = req.params;
      const products = await service.updateRandom(id);
      res.json({products, message: "Product Updated!"})
    }catch(e){
      next(e);
    }
})

router.patch("/update/:id",
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req,res, next)=>{
    try{
      const body = req.body;
      const {id} = req.params;
      const products = await service.update(id,body);
      res.json({products, message: "Product Updated!"})
    }catch(e){
      next(e);
    }
})

router.delete("/:id",async (req,res)=>{
  const {id} = req.params;
  const products = awaitservice.delete(id);
  res.json({products, message: "Product Deleted!"})
})

module.exports = router;
