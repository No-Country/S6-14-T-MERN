const Strategy = require("passport-google-oauth20").Strategy;
const { config } = require("./../../../config/config");
const jwt = require("jsonwebtoken");


const GoogleStrategy = new Strategy(
  {
    clientID: config.googleId,
    clientSecret: config.googleSecret,
    callbackURL: "http://127.0.0.1:3000/api/v1/auth/google/callback",
  },
  function (accessToken, refreshToken, profile, cb) {
    console.log("verificando si el usuario existe, sino creo uno nuevo :)");
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    const payload = {
      id: profile.id,
      is_admin: true,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    console.log({ token });
    return cb(null, { profile, token });
  }
);

module.exports = GoogleStrategy;
