const userModel = require("../models/users.model");
const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");

const getUsers = async () => {
  const users = await userModel.find();
  return users;
};

const getOneUser = async (key, value) => {
  const user = await userModel.findOne({ [key]: value });
  if (user) return user;
  else throw boom.notFound("user not found");
};

const createUser = async (req) => {
  const { firstName, lastName, email, password } =
  req.body;

  const existingUser = await userModel.findOne({ email });
  console.log({existingUser})
  if (existingUser) {
    throw boom.badRequest("User with this email already exist");
  }

  const userHash = await bcrypt.hash(password, 10);
  
  const user = await userModel.create({
    firstName,
    lastName,
    email,
    password: userHash,
  });

  return user;
};

const getOrCreateUser = async ({ key, value, data }) => {
  const user = await userModel.findOneAndUpdate(
    { [key]: value },
    { $setOnInsert: data },
    { new: true, upsert: true }
  );
  return user;
};

const sendRecoveryMail = async (email) => {
  const user = await getOneUser("email", email);

  const payload = { sub: user.id };
  const token = jwt.sign(payload, config.jwtSecret, {
    expiresIn: "10m",
  });
  user.recoveryToken = token;
  await user.save();

  const link = `${config.frontDomain}/recovery?token=${token}`;
  const message = await sendMail({
    email,
    subject: "RECOVERY PASSWORD",
    html: `<b>Click here to recover your password => ${link}</b>`,
  });

  return message;
};

const resetPassword = async (req, token, password) => {
  const { email } = req.body
  try {

    const userExist = await findOne({email})
    if (!userExist) {
      return { message: "The user doesnt existe" }
  }
    console.log({ token, password });
    const payload = jwt.verify(token, config.jwtSecret);
    const user = await getOneUser("_id", payload.sub);
    
    if (user.recoveryToken !== token) {
      throw boom.unauthorized();
    }

    const hash = await bcrypt.hash(password, 10);
    user.password = hash;
    user.recoveryToken = null;
    const updatedUser = await user.save();

    return { message: "password changed" };
  } catch (error) {
    throw boom.unauthorized();
  }
};

module.exports = {
  getUsers,
  getOneUser,
  createUser,
  getOrCreateUser
};
