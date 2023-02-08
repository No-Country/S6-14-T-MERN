const {
  uploadImg,
  deleteImg,
  getImgFromObject,
  getImgsFromArray,
} = require("../utils/firebase.utils");
const productModel = require("../models/products.model");

const boom = require("@hapi/boom");

const getProducts = async () => {
  const products = await productModel.find({}, { __v: 0 });
  const productsWithImgs = await getImgsFromArray(products);
  return productsWithImgs;
};

const getOneProduct = async (req) => {
  const { id } = req.params;

  const data = await productModel.findOne({ _id: id }, { __v: 0 });
  const productsWithImgs = await getImgFromObject(data);

  return productsWithImgs;
};

const createProduct = async (req) => {
  const { body } = req;

  const newProduct = await productModel.create(body);

  if (!req.file) {
    throw boom.badRequest("File with the name productImg is required");
  }
  const imgPath = await uploadImg({
    img: req.file,
    folderName: "products",
    id: newProduct._id,
  });

  newProduct.imageUrl = imgPath;
  await newProduct.save();

  const productWithDownloadImg = await getImgFromObject(newProduct);

  return productWithDownloadImg;
};

const deleteProduct = async (req, res, next) => {
  const { imgUrl } = req.body;
  await deleteImg(imgUrl);
};

module.exports = { createProduct, deleteProduct, getProducts, getOneProduct };
