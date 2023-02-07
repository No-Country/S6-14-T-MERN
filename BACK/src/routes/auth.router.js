const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { config } = require('./../config/config')

const router = express.Router();

router.get('/', async (req, res, next) => {
  console.log('Auth :)');
  res.send('Auth')
});

router.post('/login', 
passport.authenticate('local', {session: false}),
async (req, res, next) => {
  const user = req.user;
  const payload = {
    sub: user.id,
    is_admin: user.is_admin
  }
  const token = jwt.sign(payload, config.jwtSecret);
  res.json({user, token});
});

module.exports = router;