const dotenv = require("dotenv");

const boom = require("@hapi/boom");

dotenv.config();

const sendErrorDev = (error, req, res) => {
  res.status(error.statusCode).json({
    error,
  });
};

const sendErrorProd = (error, req, res) => {
  res.status(error.statusCode).json({
    error: error.output.payload,
  });
};

const tokenExpiredError = () => {
  return boom.unauthorized("Session Expired");
};

const tokenInvalidSignatureError = () => {
  return boom.unauthorized("Session invalid");
};

const globalErrorHandler = (error, req, res, next) => {
  // Set default values for original error obj
  error.statusCode = error.output.statusCode || 500;

  if (process.env.NODE_ENV === "development") {
    //error in development
    sendErrorDev(error, req, res, next);
  } else if (process.env.NODE_ENV === "production") {
    //errors in production
    let err = { ...error };
    err.message = error.message || "Something went wrong!";
    if (error.name === "TokenExpiredError") {
      err = tokenExpiredError();
    } else if (error.name === "JsonWebTokenError") {
      err = tokenInvalidSignatureError();
    }

    sendErrorProd(err, req, res, next);
  }
};

module.exports = globalErrorHandler;
