const express = require('express');
const { createUserValidators } = require('../middlewares/validators.middlewares');
const authRouter = require('./auth.routes');
const { productsRouter } = require('./products.routes');
const { usersRouter } = require('./users.routes')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/auth', authRouter);
  router.use('/products', productsRouter)
  router.use('/users', usersRouter)
}

module.exports = routerApi;
