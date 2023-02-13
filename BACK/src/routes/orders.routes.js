const express = require("express");

//controllers
const {
  getOrders,
  getOneOrder,
  getLastOrder,
  deleteOrder
} = require("../controllers/orders.controller");
const { categoryExist } = require("../middlewares/categories.middlewares");
const { orderExist } = require("../middlewares/orders.middlewares");
const {
  createProductValidators,
  paramIdValidator,
} = require("../middlewares/validators.middlewares");
const { upload } = require("../utils/multer.utils");

const ordersRouter = express.Router();

//TODOS LOS PRODUCTOS
ordersRouter.get("/all", async (req, res, next) => {
  try {
    const orders = await getOrders();
    res.status(200).json({ status: "success", data: { orders } });
  } catch (error) {
    next(error);
  }
});

ordersRouter.get("/last", async (req, res, next) => {
  try {
    const lastOrder = await getLastOrder();

    res.status(200).json({ status: "success", data: { lastOrder } });
  } catch (error) {
    next(error);
  }
});

// productsRouter.get("/", async (req, res, next) => {
//   try {
//     const productByName = await searchProducts(req);

//     res.status(200).json({ status: "success", data: { productByName } });
//   } catch (error) {
//     next(error);
//   }
// });

ordersRouter.get("/:id", orderExist, async (req, res, next) => {
  try {
    const order = await getOneOrder(req);

    res.status(200).json({ status: "success", data: { order } });
  } catch (error) {
    next(error);
  }
});

// productsRouter.patch("/:id", async (req, res, next) => {
//   try {
//     const updatedProduct = await updateProduct(req);

//     res.status(200).json({ status: "success", data: { updatedProduct } });
//   } catch (error) {
//     next(error);
//   }
// });

// productsRouter.post(
//   "/",
//   upload.single("productImg"),
//   createProductValidators,
//   categoryExist,
//   async (req, res, next) => {
//     try {
//       const newProduct = await createProduct(req);
//       res.status(201).json({
//         status: "success",
//         data: { newProduct },
//       });
//     } catch (error) {
//       next(error);
//     }
//   }
// );

ordersRouter.delete(
  "/:id",
  paramIdValidator,
  orderExist,
  async (req, res, next) => {
    try {
      await deleteOrder(req);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
);

module.exports = { ordersRouter };
