const orderModel = require("../models/orders.model");

const boom = require("@hapi/boom");

const orderExist = async (req, res, next) => {
  try {
    const { id } = req.params;

    const order = await orderModel.findOne({ _id: id }, { __v: 0 });

    if (!order) {
      throw boom.notFound("Order Not Found");
    }

    req.order = order;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { orderExist };
