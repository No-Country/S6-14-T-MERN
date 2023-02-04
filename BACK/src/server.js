const express = require('express');
const routerApi = require('./routes/index');

const port = process.env.PORT || 3000

const app = express()

routerApi(app);
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`)
});

module.exports = app
