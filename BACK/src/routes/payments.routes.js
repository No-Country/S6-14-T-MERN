const express = require("express");
const passport = require("passport");
const { checkAdminRole } = require("./../middlewares/auth.handler");

const router = express.Router();

router.post(
  "/create-payment",
  //   passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      //   const user = req.user;
      console.log("Comprobando que todos los datos sean correctos");
      const { orderId } = req.body;
      console.log({ orderId });
      res.json(orderId);
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
      //   const user = req.user;
      console.log("guardo el pago en la db");
      const paymentDetail = req.body;
      console.log({ paymentDetail });
      res.json(paymentDetail);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
