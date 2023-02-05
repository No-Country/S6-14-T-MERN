const jwt = require("jsonwebtoken");
const { config } = require('./../../../config/config');

const generateToken = (payload) => {
  return jwt.sign(
    {
      sub: payload.id,
      is_admin: payload.is_admin,
    },
    config.jwtSecret,
    { expiresIn: "24h" }
  );
};

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(401).json({ message: "No se proporcionó un token" });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
};

module.exports = { generateToken, verifyToken };
