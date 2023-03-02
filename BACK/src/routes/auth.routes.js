const express = require("express");
const passport = require("passport");
const { checkAdminRole } = require("./../middlewares/auth.handler");
const {
  sendRecoveryMail,
  resetPassword,
} = require("./../controllers/auth.controller");
const { config } = require("./../config/config")

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
    session: false,
  }),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.cookie("token", user.token, {
        maxAge: 3600000000,
        httpOnly: false,
      });
      //needs to be env for prod
      res.status(200).redirect(config.frontDomain);
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
    console.log({error})
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
