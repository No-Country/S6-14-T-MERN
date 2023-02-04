const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  return console.log("Auth :)")
});

module.exports = router;