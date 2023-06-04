const {faker} = require("@faker-js/faker");
const { v4: uuidv4, v5: uuidv5 } = require('uuid');
const {getRandomCategory} = require("../utils/categories");

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

  create(){
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

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.filter(product=>product.id.toString()===id)[0]
  }

  findByCategory(categoryId){

  }

  update(id){
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
    return deletedProduct;
  }
}

module.exports = ProductService;
