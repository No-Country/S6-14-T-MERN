const Strategy = require("passport-google-oauth20").Strategy;
const { config } = require("./../../../config/config");
const jwt = require("jsonwebtoken");
const { getOrCreateUser } = require("./../../../controllers/users.controller")


const GoogleStrategy = new Strategy(
  {
    clientID: config.googleId,
    clientSecret: config.googleSecret,
    callbackURL: "http://ec2-18-118-29-121.us-east-2.compute.amazonaws.com/api/v1/auth/google/callback",
  },
  async (accessToken, refreshToken, profile, cb) => {
    
    const data = {
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      googleId: profile.id,
      imageUrl: profile.photos[0].value,
      isAdmin: false
    }
    
    const user = await getOrCreateUser({key: "googleId", value: data.googleId, data})
    const payload = {
      sub: user._id,
      is_admin: true,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    
    return cb(null, { user, token });
  }
  );
  
  module.exports = GoogleStrategy;
  
