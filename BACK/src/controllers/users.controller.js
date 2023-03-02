const userModel = require("../models/users.model");
const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { uploadImg, getImgFromQuery } = require("../utils/firebase.utils");

const getUsers = async () => {
  const users = await userModel.find({}, { password: 0 });
  const userWithImgs = await getImgFromQuery(users);
  return userWithImgs;
};

const getOneUser = async (key, value) => {
  const user = await userModel.findOne({ [key]: value });
  if (user) return user;
  else throw boom.notFound("user not found");
};

const createUser = async (req) => {
  const { ...body } = req.body;
  const existingUser = await userModel.findOne({ email: body.email });

  if (existingUser) {
    throw boom.badRequest("User with this email already exist");
  }

  const salt = await bcrypt.genSalt(10);
  const userHash = await bcrypt.hash(body.password, salt);

  body.password = userHash;

  const user = await userModel.create(body);

  if (req.file) {
    console.log("upload image");
    const imgPath = await uploadImg({
      img: req.file,
      folderName: "users",
      id: user._id,
    });

    user.imageUrl = imgPath;
    await user.save();
  }

  return user;
};

const getUserInSession = async (id) => {
  const user = await userModel.findOne({ _id: id }, { __v: 0, password: 0 });

  if (!user) {
    throw boom.notFound("User Not Found");
  }

  const userWithImg = await getImgFromQuery(user);

  return userWithImg;
};

const getOrCreateUser = async ({ key, value, data }) => {
  const user = await userModel.findOneAndUpdate(
    { [key]: value },
    { $setOnInsert: data },
    { new: true, upsert: true }
  );
  return user;
};

const getLastUser = async () => {
  const lastProduct = await userModel
    .find({}, { __v: 0 })
    .limit(1)
    .sort({ _id: -1 });

  const lastProductWithImg = await getImgFromQuery(lastProduct);
  return lastProductWithImg;
};

module.exports = {
  getUsers,
  getOneUser,
  createUser,
  getOrCreateUser,
  getUserInSession,
  getLastUser,
};
