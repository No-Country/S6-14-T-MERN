const express = require("express");
const globalErrorHandler = require("./controllers/error.controller");

const routerApi = require("./routes/index");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routerApi(app);

app.use(globalErrorHandler);

require("./utils/auth");

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
