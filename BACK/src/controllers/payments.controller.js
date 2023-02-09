const userModel = require("./../models/users.model");
const boom = require("@hapi/boom");

const createPayment = async ({ userId, paymentData, orderId }) => {

  const newPayment = {
    order: orderId,
    amount: paymentData.purchase_units[0].amount.value,
    date: new Date(),
    paypalId: paymentData.id,
    meta: JSON.stringify(paymentData),
  };
  
  const user = await userModel.findOne({ _id: userId })
    .then(user => {
      console.log({user})
      user.payments.push(newPayment);
      console.log("pago agregado");
      console.log({user});
      user.save();
    })
  return user;
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

module.exports = { createPayment };
