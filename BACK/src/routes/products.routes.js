const express = require("express");

//controllers
const {
  createProduct,
  deleteProduct,
} = require("../controllers/products.controller");
const { upload } = require("../utils/multer.utils");

const productsRouter = express.Router();

productsRouter.post("/", upload.single("productImg"), createProduct);

productsRouter.delete("/", deleteProduct);

module.exports = { productsRouter };
