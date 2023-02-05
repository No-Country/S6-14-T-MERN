const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { config } = require("./../../config/config");
const { generateToken } = require("./jwt");

const LocalStrategy = require("./strategies/local.strategy");
const JwtStrategy = require("./strategies/jwt.strategy");
// const GoogleStrategy = require('./strategies/google.strategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
passport.use(
  new GoogleStrategy(
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
      return cb(null, {profile, token});
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
    }
  )
);
