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
  const { firstName, lastName, email, password } = req.body;

  const existingUser = await userModel.findOne({ email });
  console.log({ existingUser });
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

module.exports = {
  getUsers,
  getOneUser,
  createUser,
  getOrCreateUser,
};
