const express = require("express");

//controllers
const {
  getProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
  getLastProduct,
  searchProducts,
  updateProduct,
} = require("../controllers/products.controller");
const { categoryExist } = require("../middlewares/categories.middlewares");
const { productExist } = require("../middlewares/products.middlewares");
const {
  createProductValidators,
  paramIdValidator,
  updateProductValidators,
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

productsRouter.get("/last", async (req, res, next) => {
  try {
    const lastProduct = await getLastProduct();

    res.status(200).json({ status: "success", data: { lastProduct } });
  } catch (error) {
    next(error);
  }
});

productsRouter.get("/", async (req, res, next) => {
  try {
    const productByName = await searchProducts(req);

    res.status(200).json({ status: "success", data: { productByName } });
  } catch (error) {
    next(error);
  }
});

//UN PRODUCTO
productsRouter.get(
  "/:id",
  paramIdValidator,
  productExist,
  async (req, res, next) => {
    try {
      const product = await getOneProduct(req);

      res.status(200).json({ status: "success", data: { product } });
    } catch (error) {
      next(error);
    }
  }
);

productsRouter.patch(
  "/:id",
  updateProductValidators,
  productExist,
  async (req, res, next) => {
    try {
      const updatedProduct = await updateProduct(req);

      res.status(200).json({ status: "success", data: { updatedProduct } });
    } catch (error) {
      next(error);
    }
  }
);

productsRouter.post(
  "/",
  upload.single("productImg"),
  createProductValidators,
  categoryExist,
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
