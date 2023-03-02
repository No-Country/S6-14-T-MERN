const express = require("express");
const { connectDB } = require("./config/config");
const globalErrorHandler = require("./controllers/error.controller");
const { boomErrorHandler } = require("./middlewares/error.handler");
const path = require("path");
const cors = require("cors");
const boom = require("@hapi/boom");
const cookieParser = require("cookie-parser");

const routerApi = require("./routes/index");

const port = process.env.PORT || 3000;

const app = express();

connectDB();

app.use(express.static("dist"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const whiteList = [
  "http://localhost:5173",
  "http://ec2-18-118-29-121.us-east-2.compute.amazonaws.com",
  "http://localhost:3000",
  "http://127.0.0.1:3000"
];
const options = {
  origin: (origin, cb) => {
    if (whiteList.includes(origin) || !origin) {
      cb(null, true);
    } else {
      cb(boom.unauthorized("blocked by cors"));
    }
  },
};
app.use(cors(options));

routerApi(app);

app.use(boomErrorHandler);
app.use(globalErrorHandler);

require("./utils/auth");

app.use("/", (req, res, next) => {
  const indexPath = path.join(__dirname, "..", "dist", "index.html");

  res.status(200).sendFile(indexPath);
});

// Catch non-existing endpoints
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
