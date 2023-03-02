const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { sendMail } = require("./../utils/nodeMailer.utils");
const jwt = require("jsonwebtoken");
const { config } = require("./../config/config");
const { getOneUser } = require("./users.controller");

const getToken = async (id) => {
  const googleId = jwt.verify(id, config.jwtSecret);
  const user = await getOneUser("googleId", googleId.id);
  if (user.recoveryToken === googleId.id) {
    user.recoveryToken = null;
    await user.save();

    const payload = {
      sub: user.id,
      isAdmin: user.isAdmin,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return token;
  }
  throw boom.unauthorized("User not found");
};

const sendRecoveryMail = async (email) => {
  try {
    const user = await getOneUser("email", email);
    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.jwtSecret, {
      expiresIn: "10m",
    });
    user.recoveryToken = token;
    await user.save();
    const link = `${config.frontDomain}recovery?token=${token}`;
    await sendMail({
      email,
      subject: "RECOVERY PASSWORD",
      html: `<b>Click here to recover your password => ${link}</b>`,
    });
    return "The email has been sent";
  } catch (error) {
    if (error.output?.statusCode === 404) return "The email has been sent";
    throw new Error(error);
  }
};

const resetPassword = async (token, password) => {
  const payload = jwt.verify(token, config.jwtSecret);
  const user = await getOneUser("_id", payload.sub);
  console.log({ user, payload });
  if (user.recoveryToken !== token) {
    throw boom.unauthorized();
  }

  const hash = await bcrypt.hash(password, 10);
  user.password = hash;
  user.recoveryToken = null;
  const updatedUser = await user.save();
  return { message: "password changed" };
};

module.exports = {
  resetPassword,
  sendRecoveryMail,
  getToken,
};
