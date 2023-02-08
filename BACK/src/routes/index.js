const express = require('express');
const authRouter = require('./auth.routes');
const paymentsRouter = require('./payments.routes');
const { productsRouter } = require('./products.routes');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/auth', authRouter);
  router.use('/payments', paymentsRouter);
  router.use('/products', productsRouter)
}

module.exports = routerApi;
