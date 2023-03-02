const express = require("express");
const passport = require("passport");
const boom = require("@hapi/boom");
const { checkAdminRole } = require("./../middlewares/auth.handler");
const { getOneOrder } = require("./../controllers/orders.controller");
const { createPayment } = require("./../controllers/payments.controller");

const router = express.Router();

router.get(
  "/create-payment/:id",
  //   passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const order = await getOneOrder(req);
      if (order.status === "pending")
        res.status(202).json({
          message: "Accepted",
          data: order.priceAmount,
        });
      else throw boom.conflict("This product has already been paid for");
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/success/:id",
  //   passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const { paymentData } = req.body;
      const { id } = req.params;
      const newPayment = await createPayment({ paymentData, orderId: id });
      res.json(newPayment);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
