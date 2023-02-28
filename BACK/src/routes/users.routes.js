const express = require("express");
const passport = require("passport");
const {
  getUsers,
  getOneUser,
  createUser,
  getUserInSession,
  getLastUser
} = require("../controllers/users.controller");
const {
  createUserValidators,
} = require("../middlewares/validators.middlewares");
const { upload } = require("../utils/multer.utils");

const usersRouter = express.Router();

usersRouter.get(
  "/",
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

usersRouter.get("/last", async (req, res, next) => {
  try {
    const lastUser = await getLastUser();

    res.status(200).json({ status: "success", data: { lastUser } });
  } catch (error) {
    next(error);
  }
});

usersRouter.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const { sub } = req.user;
      const user = await getUserInSession(sub);

      res.status(200).json({ status: "success", data: { user } });
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

usersRouter.post(
  "/create",
  upload.single("userImg"),
  createUserValidators,
  async (req, res, next) => {
    try {
      await createUser(req);
      next();
    } catch (error) {
      next(error);
    }
  },
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    const user = req.user;

    user.user.password = undefined;
    res.json(user);
  }
);

module.exports = { usersRouter };
