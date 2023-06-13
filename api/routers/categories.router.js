const express = require("express");

const router = express.Router();
const CategoryService = require("../services/category.service");
const service = new CategoryService();

router.get("/",(req,res)=>{
  let categories = service.categories;
  res.json(categories)
})

router.get("/:categoryId/",(req,res)=>{
  const {categoryId} = req.params;
  const categories = service.findByCategoryId(categoryId)
  res.json(categories)
})

router.get("/:category/",(req,res)=>{
  const {category} = req.params;
  const categories = service.findByCategory(category)
  res.json(categories)
})

// router.get("/:categoryId/products/",(req,res)=>{
//   const {categoryId} = req.params;

//   res.json(product)
// })

// router.get("/:categoryId/products/:productId",(req,res)=>{
//   const {categoryId, productId} = req.params;
//   const product = {
//     categoryId,
//     productId
//   }
//   res.json(product)
// })

module.exports = router;
