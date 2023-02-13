const express = require("express");
const {
  getUsers,
  getOneUser,
  createUser,
} = require("../controllers/users.controller");
const {
  createUserValidators,
} = require("../middlewares/validators.middlewares");

const usersRouter = express.Router();

usersRouter.get("/all", async (req, res, next) => {
  try {
    const users = await getUsers();
    res.status(200).json({ status: "succes", data: { users } });
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getOneUser("_id", id);
    return res.status(200).json({ status: "succes", data: { user } });
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/create", createUserValidators, async (req, res, next) => {
  try {
    const user = await createUser(req);
    res.status(200).json({ status: "succes", data: { user } });
  } catch (error) {
    next(error);
  }
});

module.exports = { usersRouter };
