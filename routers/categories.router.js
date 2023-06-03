const express = require("express");
const {faker} = require("@faker-js/faker");

const router = express.Router();

router.get("/:categoryId/products/:productId",(req,res)=>{
  const {categoryId, productId} = req.params;
  const product = {
    categoryId,
    productId
  }
  res.json(product)
})

module.exports = router;
