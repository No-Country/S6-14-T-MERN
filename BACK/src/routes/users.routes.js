const express = require("express");
const passport = require("passport");
const {
  getUsers,
  getOneUser,
  createUser,
  resetPassword,
} = require("../controllers/users.controller");
const {
  createUserValidators,
} = require("../middlewares/validators.middlewares");

const usersRouter = express.Router();

usersRouter.get("/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const id = req.user.sub;
      const user = await getOneUser("_id", id);
      res.status(200).json({ status: "succes", data: { user } });
    } catch (error) {
      next(error);
    }
  }
);

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
    res.status(201).json({ status: "succes", data: { user } });
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/olvide-password", async (req, res, next) => {
  try {
    const user = await resetPassword(req)
    res.status(200).json({ status: "succes", data: { user } })
  } catch (error) {
    next(error)
    
  }
})

module.exports = { usersRouter };
