const express = require("express");
const passport = require("passport");
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categories.controller");
const { checkAdminRole } = require("../middlewares/auth.handler");
const { categoryExist } = require("../middlewares/categories.middlewares");
const {
  createCategoryValidators,
  paramIdValidator,
  updateCategoryValidator,
} = require("../middlewares/validators.middlewares");

const categoriesRouter = express.Router();

categoriesRouter.get("/", async (req, res, next) => {
  try {
    const categories = await getAllCategories();
    res.status(200).json({ status: "success", data: { categories } });
  } catch (error) {
    next(error);
  }
});

categoriesRouter.get(
  "/:id",
  paramIdValidator,
  categoryExist,
  async (req, res, next) => {
    try {
      const category = await getCategoryById(req);
      res.status(200).json({ status: "success", data: { category } });
    } catch (error) {
      next(error);
    }
  }
);

categoriesRouter.use(
  passport.authenticate("jwt", { session: false }),
  checkAdminRole
);

categoriesRouter.post("/", createCategoryValidators, async (req, res, next) => {
  try {
    const newCategory = await createCategory(req);
    res.status(201).json({ status: "success", data: { newCategory } });
  } catch (error) {
    next(error);
  }
});

categoriesRouter.patch(
  "/:id",
  updateCategoryValidator,
  categoryExist,
  async (req, res, next) => {
    try {
      const category = await updateCategory(req);
      res.status(200).json({ status: "success", data: { category } });
    } catch (error) {
      next(error);
    }
  }
);

categoriesRouter.delete(
  "/:id",
  paramIdValidator,
  categoryExist,
  async (req, res, next) => {
    try {
      await deleteCategory(req);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
);

module.exports = { categoriesRouter };
