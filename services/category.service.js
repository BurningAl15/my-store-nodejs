const {faker} = require("@faker-js/faker");
const {getAllCategories} = require("../utils/categories");

class CategoryService {

  constructor(){
    this.category="";
    this.products="";
    this.categories=[];
    this.generate();
  }

  generate(){
    this.categories=getAllCategories();
  }

  find(){
    return this.categories;
  }

  findByCategory(category){
    console.log(category);
    return this.categories.filter(cat=>cat===category)
  }

  findByCategoryId(categoryId){
    return this.categories.filter((cat,index)=>index.toString()===categoryId)
  }
}

module.exports = CategoryService;
