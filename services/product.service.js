const {faker} = require("@faker-js/faker");
const { v4: uuidv4, v5: uuidv5 } = require('uuid');
const {getRandomCategory, getCategoryById} = require("../utils/categories");

class ProductService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    let randomUUID = uuidv4();
    for(let index=0;index<limit;index++){
      this.products.push({
        id: randomUUID,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.url(),
        category: getRandomCategory(),
      })
      randomUUID = uuidv4();
    }
  }

  createRandom(){
    let randomUUID = uuidv4();
    let newProduct = {
      id: randomUUID,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.url(),
      category: getRandomCategory(),
    }
    this.products.push(newProduct);
    return newProduct;
  }

  create(data){
    let randomUUID = uuidv4();
    let newProduct = {
      id: randomUUID,
      name: data.name,
      price: parseInt(data.price),
      image: data.url || faker.image.url(),
      category: getCategoryById(data.category),
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.filter(product=>product.id.toString()===id)[0]
  }

  findByCategory(categoryId){

  }

  updateRandom(id){
    let updatedProduct;
    this.products = this.products.map((product)=>{
      if(product.id.toString()===id){
        updatedProduct = {
          id: id,
          name: faker.commerce.productName(),
          price: parseInt(faker.commerce.price()),
          image: faker.image.url(),
          category: product.category,
        }
        return updatedProduct;
      }
      else{
        return product
      }
    })

    if(updatedProduct === undefined){
      throw new Error("Product not found");
    }
    return updatedProduct;
  }

  update(id, data){
    let updatedProduct;
    this.products = this.products.map((product)=>{
      if(product.id.toString()===id){
        updatedProduct = {
          id: id,
          name: data.name,
          price: parseInt(data.price),
          image: data.url || faker.image.url(),
          category: getCategoryById(data.category),
        }
        return updatedProduct;
      }
      else{
        return product
      }
    })

    if(updatedProduct === undefined){
      throw new Error("Product not found");
    }
    return updatedProduct;
  }

  delete(id){
    let deletedProduct;
    this.products = this.products.filter((product)=>{
      if(product.id.toString()!==id){
        return product
      }
      else{
        deletedProduct = product;
      }
    })

    if(deletedProduct === undefined){
      throw new Error("Product not found");
    }

    return deletedProduct;
  }
}

module.exports = ProductService;
