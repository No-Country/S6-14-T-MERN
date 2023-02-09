const User = require("../models/users.model");
const boom = require("@hapi/boom");

const createPayment = async () => {
  const newPayment = await productModel.find();
  return newPayment;
};

const getOneProduct = async (req) => {
  const { id } = req.params;

  const data = await productModel.findOne({ _id: id });

  return data;
};

const createProduct = async (req) => {
  if (!req.file) {
    throw boom.badRequest("File with the name productImg is required");
  }
  const imgPath = await uploadImg({
    img: req.file,
    folderName: "products",
    id: 1,
  });

  return imgPath;
};

const deleteProduct = async (req, res, next) => {
  const { imgUrl } = req.body;
  await deleteImg(imgUrl);
};

module.exports = { createProduct, deleteProduct, getProducts, getOneProduct };
