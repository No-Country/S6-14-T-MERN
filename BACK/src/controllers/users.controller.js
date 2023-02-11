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
  const { firstName, lastName, email, address, password, imageUrl, isAdmin } =
    req.body;

  console.log({firstName, lastName, email, address, password, imageUrl, isAdmin})
  const userHash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    firstName,
    lastName,
    email,
    address,
    password: userHash,
    imageUrl,
    isAdmin,
  });
  console.log({user})

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

module.exports = { getUsers, getOneUser, createUser, getOrCreateUser };
