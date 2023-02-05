const Strategy = require("passport-google-oauth20").Strategy;
const { generateToken } = require("./../jwt");
const { config } = require("./../../../config/config");


const GoogleStrategy = new Strategy(
  {
    clientID: config.googleId,
    clientSecret: config.googleSecret,
    callbackURL: "http://127.0.0.1:3000/auth/google/callback",
  },
  function (accessToken, refreshToken, profile, cb) {
    console.log("verificando si el usuario existe, sino creo uno nuevo :)");
    const payload = {
      id: profile.id,
      is_admin: true,
    };
    const token = generateToken(payload);
    console.log({ token });
    return cb(null, { profile, token });
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
);

module.exports = GoogleStrategy;
