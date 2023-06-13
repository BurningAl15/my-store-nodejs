const express = require("express");
const routerApi = require("./routers");

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')

const cors = require('cors');
const app=express();
const PORT = process.env.PORT || 3000;

// const whitelist = ['http://localhost:8080', 'https://myapp.com'];
// const options = {
//   origin: (origin, callback) => {
//     if(whitelist.includes(origin)){
//       callback(null, true);
//     }
//     else{
//       callback(new Error('Not Allowed'));
//     }
//   }
// }

// app.use(cors(options));
app.use(cors());

app.use(express.json());

app.get("/api/",(req,res)=>{
  res.send("Hi from my express server")
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT,()=>{
  console.log(`My Port ${PORT}`)
})
