require('dotenv').config();

const config = {
  jwtSecret: process.env.JWT_SECRET,
  googleId: process.env.GOOGLE_CLIENT_ID,
  googleSecret: process.env.GOOGLE_CLIENT_SECRET
}

module.exports = { config };