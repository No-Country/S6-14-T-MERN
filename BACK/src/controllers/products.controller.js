const {
  uploadImg,
  deleteImg,
  getImgFromObject,
} = require("../utils/firebase.utils");
const productModel = require("../models/products.model");
const mongoose = require('mongoose')

const boom = require("@hapi/boom");

const getProducts = async () => {
  const products = await productModel.find();
  return products;
};

const getOneProduct = async (req) => {
  const { id } = req.params;
  const product = await productModel.findOne({ _id: id });
  return product;
};

const getLastProduct = async (req) => {
  const lastProduct = await productModel.find().limit(1).sort({_id:-1})
  return lastProduct;
};

const searchProducts = async (req, res) => {
  const { searchProduct } = req.query;
  console.log(req.query);
  const searchResults = await productModel.find({
    $string: { $search: searchProduct },
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
    return res.send(searchResults3).status(200);
  }

  return searchResults
  // res.send(searchResults).status(200);
};


// const getProductByName = async (req) => {
//   const { productName } = req.body;
//   const productByName = await productModel.findOne({ name: productName });
//   return productByName;
// }

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

const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send("Invalid Product ID");
  }
  const { ...data } = req.body;
  const productUpdate = await productModel.findByIdAndUpdate(id, data, {
    new: true,
  });

  return productUpdate
  // res.status(200).json(productUpdate);
};

const deleteProduct = async (req, res, next) => {
  const { imgUrl } = req.body;
  await deleteImg(imgUrl);
};

module.exports = { createProduct, deleteProduct, getProducts, getOneProduct, getLastProduct, searchProducts, updateProduct };
