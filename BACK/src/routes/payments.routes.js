const express = require("express");
const passport = require("passport");
const { checkAdminRole } = require("./../middlewares/auth.handler");
const { createPayment } = require('./../controllers/payments.controller');


const router = express.Router();

router.post(
  "/create-payment",
  //   passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const { orderId } = req.body;
      console.log("Busco la orden por id");
      console.log({ orderId });
      const order = {
        price: 5
      }
      res.json(order.price);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/success",
  //   passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const userId = "63e2f03c48b14837df659232"
      const { paymentData, orderId } = req.body;
      const newPayment = await createPayment({userId, paymentData, orderId})
      res.json(newPayment);
    } catch (error) {
      console.log({error})
      next(error);
    }
  }
);

module.exports = router;
