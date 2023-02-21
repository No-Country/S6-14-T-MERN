const express = require("express");
const passport = require("passport");
const { checkAdminRole } = require("./../middlewares/auth.handler");
const { sendRecoveryMail, resetPassword } = require("./../controllers/users.controller");


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
  async (req, res, next) => {
    try {
      const user = req.user;
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post("/send-recovery", async (req, res, next) => {
  try {
    const { email } = req.body;
    const message = await sendRecoveryMail(email);

    res.status(200).json({ status: "success", message });
  } catch (error) {
    next(error);
  }
});

router.post("/reset-password", async (req, res, next) => {
  try {
    const { token, password } = req.body;
    const message = await resetPassword(token, password);

    res.status(200).json({ status: "success", message });
  } catch (error) {
    next(error);
  }
});

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
