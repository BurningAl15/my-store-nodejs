const productsRouter = require("./products.router");
const usersRouter = require("./users.router");
const categoriesRouter = require("./categories.router");

const apiRouteVersion = "/api/v1";
const express = require("express");

function routerApi(app){
  const router = express.Router();
  app.use(apiRouteVersion, router)

  router.use(`/products`,productsRouter);
  router.use(`/users`,usersRouter);
  router.use(`/categories`,categoriesRouter);
}

module.exports = routerApi;
