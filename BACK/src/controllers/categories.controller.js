const categoryModel = require("../models/categories.model");

const getAllCategories = async () => {
  const categories = await categoryModel.find({}, { __v: 0 });

  return categories;
};

const getCategoryById = async (req) => {
  const { category } = req;

  return category;
};

const createCategory = async (req) => {
  const { body } = req;

  const newCategory = await categoryModel.create(body);

  return newCategory;
};

const updateCategory = async (req) => {
  const { category } = req;
  const { name } = req.body;

  category.name = name;

  await category.save();

  return category;
};

const deleteCategory = async (req) => {
  const { category } = req;

  await categoryModel.deleteOne({ _id: category._id });
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
