const express = require("express");
const passport = require("passport");
const { checkAdminRole } = require("./../middlewares/auth.handler");

const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("Auth :)");
  res.send("Auth");
});

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    const user = req.user;
    res.json(user);
  }
);

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    session: false,
  }),
  function (req, res, next) {
    res.json({ user: req.user.profile, token: req.user.token });
  }
);

router.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole,
  async (req, res, next) => {
    try {
      res.json({
        mensaje: "Welcome to the protected route",
        user: req.user,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
