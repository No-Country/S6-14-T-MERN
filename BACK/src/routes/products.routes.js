const express = require("express");

//controllers
const {
  getProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/products.controller");
const { upload } = require("../utils/multer.utils");

const productsRouter = express.Router();


//TODOS LOS PRODUCTOS
productsRouter.get('/all', getProducts)

//UN PRODUCTO
productsRouter.get('/:id', getOneProduct)

productsRouter.post("/", upload.single("productImg"), createProduct);

productsRouter.delete("/", deleteProduct);

module.exports = { productsRouter };
