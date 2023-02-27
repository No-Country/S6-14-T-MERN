const { Strategy } = require("passport-local");
const boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");
const { config } = require("./../../../config/config");
const { getOneUser } = require("./../../../controllers/users.controller");
const bcrypt = require("bcrypt");
const { getImgFromQuery } = require("../../firebase.utils");

const LocalStrategy = new Strategy(
  {
    usernameField: "email",
  },
  async (email, password, done) => {
    try {
      let user = await getOneUser("email", email);
      if (!user) {
        done(boom.unauthorized("The username or password is incorrect"), false);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        done(boom.unauthorized("The username or password is incorrect"), false);
      }
      const payload = {
        sub: user.id,
        isAdmin: user.isAdmin,
      };
      const token = jwt.sign(payload, config.jwtSecret);

      user = await getImgFromQuery(user);
      done(null, { user, token });
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;
