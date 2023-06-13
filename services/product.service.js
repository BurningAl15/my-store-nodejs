const {faker} = require("@faker-js/faker");
const boom = require('@hapi/boom');
const { v4: uuidv4, v5: uuidv5 } = require('uuid');
const {getRandomCategory, getCategoryById} = require("../utils/categories");

class ProductService {

  constructor(){
    this.products = [];
    this.generate();
  }

  async generate(){
    const limit = 100;
    let randomUUID = uuidv4();
    for(let index=0;index<limit;index++){
      this.products.push({
        id: randomUUID,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.url(),
        category: getRandomCategory(),
        isBlock: faker.datatype.boolean(),
      })
      randomUUID = uuidv4();
    }
  }

  async createRandom(){
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

  async create(data){
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
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(this.products)
      },5000)
    })
  }

  async findOne(id){
    const product = this.products.filter(product=>product.id.toString()===id)[0];
    if(product === undefined){
      // throw new Error("Product not found");
      throw boom.notFound("Product not found");
    }
    if(product.isBlock){
      throw boom.conflict("Product is blocked");
    }
    return product;
  }

  async findByCategory(categoryId){

  }

  async updateRandom(id){
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
      // throw new Error("Product not found");
      throw boom.notFound("Product not found");
    }
    return updatedProduct;
  }

  async update(id, data){
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
      throw boom.notFound("Product not found");
    }
    return updatedProduct;
  }

  async delete(id){
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
      throw boom.notFound("Product not found");
    }

    return deletedProduct;
  }
}

module.exports = ProductService;
