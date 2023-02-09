const express = require("express");
const { connectDB } = require("./config/config");
const globalErrorHandler = require("./controllers/error.controller");
const { boomErrorHandler } = require("./middlewares/error.handler");
const cors = require("cors");
const boom = require("@hapi/boom")

const routerApi = require("./routes/index");

const port = process.env.PORT || 3000;

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const whiteList = ["http://localhost:5173"]
const options = {
  origin: (origin, cb) => {
    if (whiteList.includes(origin) || !origin) {
      cb(null, true);
    } else {
      cb(boom.unauthorized("blocked by cors"))
    }
  }
}
app.use(cors(options))

routerApi(app);

app.use(boomErrorHandler);
app.use(globalErrorHandler);

require("./utils/auth");

// Catch non-existing endpoints
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
