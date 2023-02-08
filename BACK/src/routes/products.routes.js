const express = require("express");

//controllers
const {
  getProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/products.controller");
const { productExist } = require("../middlewares/products.middlewares");
const {
  createProductValidators,
  paramIdValidator,
} = require("../middlewares/validators.middlewares");
const { upload } = require("../utils/multer.utils");

const productsRouter = express.Router();

//TODOS LOS PRODUCTOS
productsRouter.get("/all", async (req, res, next) => {
  try {
    const products = await getProducts();
    res.status(200).json({ status: "success", data: { products } });
  } catch (error) {
    next(error);
  }
});

//UN PRODUCTO
productsRouter.get("/:id", productExist, async (req, res, next) => {
  try {
    const product = await getOneProduct(req);

    res.status(200).json({ status: "success", data: { product } });
  } catch (error) {
    next(error);
  }
});

productsRouter.post(
  "/",
  upload.single("productImg"),
  createProductValidators,
  async (req, res, next) => {
    try {
      const newProduct = await createProduct(req);
      res.status(201).json({
        status: "success",
        data: { newProduct },
      });
    } catch (error) {
      next(error);
    }
  }
);

productsRouter.delete(
  "/:id",
  paramIdValidator,
  productExist,
  async (req, res, next) => {
    try {
      await deleteProduct(req);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
);

module.exports = { productsRouter };
