const { uploadImg, deleteImg } = require("../utils/firebase.utils");

const boom = require("@hapi/boom");

const createProduct = async (req, res, next) => {
  try {
    if (!req.file) {
      throw boom.badRequest("File with the name productImg is required");
    }
    const imgPath = await uploadImg({
      img: req.file,
      folderName: "products",
      id: 1,
    });
    res.status(201).json({
      status: "success",
      data: { imgPath },
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { imgUrl } = req.body;
    await deleteImg(imgUrl);

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = { createProduct, deleteProduct };
