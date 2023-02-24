const {
  body,
  param,
  validationResult,
  matchedData,
} = require("express-validator");
const boom = require("@hapi/boom");

const checkValidations = (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      const message = errorMessages.join(". ");

      throw boom.badRequest(message);
    }

    const requiredData = matchedData(req, { includeOptionals: false });
    delete requiredData.id;
    req.body = requiredData;
    next();
  } catch (error) {
    next(error);
  }
};

const notEmptyString = (fieldName, min, max) =>
  body(fieldName)
    .notEmpty()
    .withMessage(`${fieldName} must not be empty`)
    .isString()
    .withMessage(`${fieldName} must be a string`)
    .isLength({ min, max })
    .withMessage(`${fieldName} must be between ${min} and ${max} characters`);

const email = () =>
  body("email")
    .isEmail()
    .withMessage("must provide a valid email")
    .notEmpty()
    .withMessage("email must not be empty");

const password = () =>
  body("password")
    .isString()
    .withMessage("password must be a string")
    .notEmpty()
    .withMessage("password must not be empty")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
    .withMessage(
      "password must contain at least one uppercase letter, one lowercase letter, and one number"
    );

const price = () =>
  body("price")
    .notEmpty()
    .withMessage("price must not be empty")
    .toFloat()
    .isFloat({ min: 0 })
    .withMessage("price must be a number greater than 0");

const category = () =>
  body("category")
    .notEmpty()
    .withMessage("category must not be empty")
    .isMongoId()
    .withMessage("category must be a mongoId");

const createUserValidators = [
  notEmptyString("firstName", 3, 20),
  notEmptyString("lastName", 3, 20),
  email(),
  password(),
];

const updatePasswordValidators = [password()];

const createProductValidators = [
  notEmptyString("name"),
  notEmptyString("shortDescription", 10, 20),
  notEmptyString("largeDescription", 20, 50),
  price(),
  notEmptyString("type", 3, 15),
  category(),
  checkValidations,
];

const updateProductValidators = [
  param("id").isMongoId().withMessage("id param must be a valid mongo id"),
  body("name")
    .optional()
    .isString()
    .withMessage("name must be a string")
    .isLength({ min: 3 })
    .withMessage("name must be at least 3 characters"),
  body("shortDescription")
    .optional()
    .isString()
    .withMessage("shortDescription must be a string")
    .isLength({ min: 10 })
    .withMessage("shortDescription must be at least 10 characters"),
  body("largeDescription")
    .optional()
    .isString()
    .withMessage("largeDescription must be a string")
    .isLength({ min: 20 })
    .withMessage("largeDescription must be at least 20 characters"),
  body("price")
    .optional()
    .toFloat()
    .isFloat({ min: 0 })
    .withMessage("price must be a number greater than 0"),
  body("type").optional().isString().withMessage("type must be a string"),
  body("category")
    .optional()
    .isMongoId()
    .withMessage("category must be a mongoId"),
  checkValidations,
];

const paramIdValidator = [
  param("id").isMongoId().withMessage("id param must be a valid mongo id"),
  checkValidations,
];

const createCategoryValidators = [
  body("name")
    .notEmpty()
    .withMessage("name must not be empty")
    .isString()
    .withMessage("name must be a string"),
  checkValidations,
];

const updateCategoryValidator = [
  param("id").isMongoId().withMessage("id param must be a valid mongo id"),
  body("name")
    .notEmpty()
    .withMessage("name must not be empty")
    .isString()
    .withMessage("name must be a string"),
  checkValidations,
];

module.exports = {
  createUserValidators,
  createProductValidators,
  updateProductValidators,
  paramIdValidator,
  createCategoryValidators,
  updateCategoryValidator,
};
