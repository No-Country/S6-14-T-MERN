const { productModel } = require("../models/products.model");

const boom = require("@hapi/boom");

const productExist = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await productModel.findOne({ _id: id }, { __v: 0 });

    if (!product) {
      throw boom.notFound("Product Not Found");
    }

    req.product = product;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { productExist };
