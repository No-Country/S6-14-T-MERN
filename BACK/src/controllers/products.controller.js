const { uploadImg, deleteImg } = require("../utils/firebase.utils");

const createProduct = async (req, res) => {
  try {
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
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { imgUrl } = req.body;
    await deleteImg(imgUrl);

    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createProduct, deleteProduct };
