const userModel = require("../models/users.model");
const boom = require("@hapi/boom")

const getUsers = async () => {
  const users = await userModel.find();
  return users;
};

const getOneUser = async (key, value) => {
  const user = await userModel.findOne({ [key]: value });
  if (user) return user
  else throw boom.notFound("user not found")
};

const createUser = async (req) => {
  const { firstName, lastName, email, address, password, imageUrl, isAdmin } =
    req.body;

  const user = new userModel({
    firstName,
    lastName,
    email,
    address,
    password,
    imageUrl,
    isAdmin,
  });

  const newUser = await user.save();
  return newUser;
};

const getOrCreateUser = async ({ key, value, data }) => {
  const user = await userModel.findOneAndUpdate(
    { [key]: value },
    { $setOnInsert: data },
    { new: true, upsert: true }
  );
  return user;
};

module.exports = { getUsers, getOneUser, createUser, getOrCreateUser };
