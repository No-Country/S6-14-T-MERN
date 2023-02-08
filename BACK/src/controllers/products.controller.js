const {
  uploadImg,
  deleteImg,
  getImgFromQuery,
} = require("../utils/firebase.utils");
const productModel = require("../models/products.model");

const boom = require("@hapi/boom");

const getProducts = async () => {
  const products = await productModel.find({}, { __v: 0 });
  const productsWithImgs = await getImgFromQuery(products);
  return productsWithImgs;
};

const getOneProduct = async (req) => {
  const { product } = req;

  const productsWithImgs = await getImgFromQuery(product);

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

  const productWithDownloadImg = await getImgFromQuery(newProduct);

  return productWithDownloadImg;
};

const deleteProduct = async (req) => {
  const { product } = req;

  await deleteImg(product.imageUrl);

  await productModel.deleteOne({ _id: product._id });
};

module.exports = { createProduct, deleteProduct, getProducts, getOneProduct };
