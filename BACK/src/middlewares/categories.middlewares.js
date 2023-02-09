const categoryModel = require("../models/categories.model");
const boom = require("@hapi/boom");

const categoryExist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { categoryId } = req.body;

    const category = await categoryModel.findOne(
      { _id: id || categoryId },
      { __v: 0 }
    );

    if (!category) {
      throw boom.notFound("Category Not Found");
    }

    req.category = category;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { categoryExist };
