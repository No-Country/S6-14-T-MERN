const {
  uploadImg,
  deleteImg,
  getImgFromQuery,
} = require("../utils/firebase.utils");
const productModel = require("../models/products.model");
const mongoose = require("mongoose");

const boom = require("@hapi/boom");

const getProducts = async () => {
  const products = await productModel.find({}, { __v: 0 });

  const productsWithImgs = await getImgFromQuery(products);
  return productsWithImgs;
};

const getOneProduct = async (req) => {
  const { id } = req.params;
  const product = await productModel.findOne({ _id: id }, { __v: 0 });

  const productsWithImgs = await getImgFromQuery(product);
  return productsWithImgs;
};

const getLastProduct = async () => {
  const lastProduct = await productModel
    .find({}, { __v: 0 })
    .limit(1)
    .sort({ _id: -1 });

  const productsWithImgs = await getImgFromQuery(lastProduct);
  return productsWithImgs;
};

const searchProducts = async (req, res) => {
  const { searchProduct } = req.query;
  const nameRegex = `^${searchProduct}`;
  const searchResults = await productModel.find({
    name: { $regex: new RegExp(nameRegex, "i") },
  });
  // console.log(searchResults);

  if (searchResults.length == 0) {
    const all = await productModel.find();

    const searchResults = all.filter((product) =>
      product.name.includes(searchProduct)
    );
    const searchResults2 = all.filter((product) =>
      product.shortDescription.includes(searchProduct)
    );
    //Si un objeto de result contiene similitud con un resultado de result2 el mismo conserbara
    //los cambios de result2 y agregara los que la primera busqueda no contiene
    let searchResults3 = [...searchResults, ...searchResults2];
    if (searchResults3.length < 0) {
      return res
        .send({ message: "No se encontraron resultados para esta búsqueda" })
        .status(200);
    }
    const productsWithImgs = await getImgFromQuery(searchResults3);
    return productsWithImgs;
  }

  const productsWithImgs = await getImgFromQuery(searchResults);
  return productsWithImgs;
  // res.send(searchResults).status(200);
};

// const getProductByName = async (req) => {
//   const { productName } = req.body;
//   const productByName = await productModel.findOne({ name: productName });
//   return productByName;
// }

const createProduct = async (req) => {
  const { body } = req;

  const newProduct = await (
    await productModel.create(body)
  ).populate("category");

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

const updateProduct = async (req) => {
  const { id } = req.params;
  const { ...data } = req.body;

  const productUpdate = await productModel.findByIdAndUpdate(id, data, {
    new: true,
  });

  const productWithDownloadImg = await getImgFromQuery(productUpdate);
  return productWithDownloadImg;
};

const deleteProduct = async (req) => {
  const { product } = req;

  await deleteImg(product.imageUrl);

  await productModel.deleteOne({ _id: product._id });
};

module.exports = {
  createProduct,
  deleteProduct,
  getProducts,
  getOneProduct,
  getLastProduct,
  searchProducts,
  updateProduct,
};
