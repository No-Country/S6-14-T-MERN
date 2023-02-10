const express = require("express");
const Request = require("express");
const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  searhUsers
} = require("../controllers/users.controller");
const {
  createUserValidators,
} = require("../middlewares/validators.middlewares");
const userModel = require("../models/users.model");

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
    const user = await getOneUser(req);
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

usersRouter.patch("/:id", async (req, res, next) => {
    try {
      const user = await updateUser(req);
      return res.status(200).json({ status: "succes", data: { user } });
    } catch (error) {
      next(error);
    }
  });

usersRouter.delete("/:id", async (req, res, next) => {
    try {
      const user = await deleteUser(req);
      return res.status(200).json({ status: "succes", data: { user } });
    } catch (error) {
      next(error);
    }
  });

 usersRouter.get('/', async (req, res, next) => {
  try {
    const searchUser = await searhUsers(req);
    return res.status(200).json({ status: "succes", data: { searchUser } });
    
  } catch (error) {
    next(error);
  }

 }); 

  

module.exports = { usersRouter };
