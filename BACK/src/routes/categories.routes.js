const express = require("express");
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categories.controller");

const categoriesRouter = express.Router();

categoriesRouter.get("/", async (req, res, next) => {
  try {
    const categories = await getAllCategories();
    res.status(200).json({ status: "success", data: { categories } });
  } catch (error) {
    next(error);
  }
});

categoriesRouter.get(":id", async (req, res, next) => {
  try {
    const category = await getCategoryById();
    res.status(200).json({ status: "success", data: { category } });
  } catch (error) {
    next(error);
  }
});

categoriesRouter.post("/", async (req, res, next) => {
  try {
    const newCategory = await createCategory();
    res.status(201).json({ status: "success", data: { newCategory } });
  } catch (error) {
    next(error);
  }
});

categoriesRouter.patch("/:id", async (req, res, next) => {
  try {
    const category = await updateCategory();
    res.status(200).json({ status: "success", data: { category } });
  } catch (error) {
    next(error);
  }
});

categoriesRouter.delete("/:id", async (req, res, next) => {
  try {
    await deleteCategory();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = { categoriesRouter };
