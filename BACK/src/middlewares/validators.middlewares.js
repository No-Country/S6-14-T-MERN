const { body, param, validationResult } = require("express-validator");
const boom = require("@hapi/boom");

const checkValidations = (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw boom.badRequest(errors.array());
    }

    next();
  } catch (error) {
    next(error);
  }
};

const createUserValidators = [
  body("firstName")
    .isString()
    .withMessage("firstName must be a string")
    .notEmpty()
    .withMessage("firstName must not be empty"),
  body("lastName")
    .isString()
    .withMessage("lastName must be a string")
    .notEmpty()
    .withMessage("lastName must not be empty"),
  body("email")
    .isEmail()
    .withMessage("must provide a valid email")
    .notEmpty()
    .withMessage("email must not be empty"),
  body("address")
    .isString()
    .withMessage("address must be a string")
    .notEmpty()
    .withMessage("address must not be empty"),
  body("password")
    .isString()
    .withMessage("password must be a string")
    .notEmpty()
    .withMessage("password must not be empty")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters"),
  body("isAdmin")
    .isBoolean()
    .withMessage("isAdmin must be a boolean")
    .notEmpty()
    .withMessage("isAdmin must not be empty"),
  checkValidations,
];

module.exports = { createUserValidators };
