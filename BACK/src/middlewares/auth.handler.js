const boom = require("@hapi/boom");

function checkAdminRole(req, res, next) {
  const user = req.user;
  if (user.isAdmin === true) {
    next();
  } else {
    next(boom.unauthorized("Only for admins"));
  }
}

module.exports = { checkAdminRole }
