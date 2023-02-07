const passport = require("passport");

const LocalStrategy = require("./strategies/local.strategy");
const JwtStrategy = require("./strategies/jwt.strategy");
const GoogleStrategy = require('./strategies/google.strategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
passport.use(GoogleStrategy);
