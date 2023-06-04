const {faker} = require("@faker-js/faker");
const { v4: uuidv4, v5: uuidv5 } = require('uuid');

class UserService{

  constructor(){
    this.users=[]
    this.generate();
  }

  generate(){
    const limit = 100;
    let randomUUID = uuidv4();
    for(let index=0;index<limit;index++){
      this.users.push({
        id: randomUUID,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        sex: faker.person.sex(),
        jobTitle: faker.person.jobTitle()
      })
      randomUUID = uuidv4();
    }
  }

  create(){
    let randomUUID = uuidv4();
    let newUser = {
      id: randomUUID,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      sex: faker.person.sex(),
      jobTitle: faker.person.jobTitle()
    }
    this.users.push(newUser);
    return newUser;
  }

  find(){
    return this.users;
  }

  findOne(id){
    return this.users.filter(user=>user.id.toString()===id)[0]
  }

  update(id){
    let updatedUser;
    this.users = this.users.map((user)=>{
      if(user.id.toString()===id){
        updatedUser = {
          id: id,
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          sex: faker.person.sex(),
          jobTitle: faker.person.jobTitle()
        }
        return updatedUser;
      }
      else{
        return user
      }
    })
    return updatedUser;
  }

  delete(id){
    let deletedUser;
    this.users = this.users.filter((user)=>{
      if(user.id.toString()!==id){
        return user
      }
      else{
        deletedUser = user;
      }
    })
    return deletedUser;
  }
}

module.exports = UserService;
