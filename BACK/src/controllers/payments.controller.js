const { orderModel } = require("./../models/orders.model")
const boom = require("@hapi/boom");

const createPayment = async ({ paymentData, orderId }) => {
  
  const newPayment = {
    paypalId: paymentData.id,
    amount: paymentData.purchase_units[0].amount.value,
    date: new Date(),
    meta: JSON.stringify(paymentData),
  }; 
  if (paymentData.status === "COMPLETED") {
    const order = await orderModel.findByIdAndUpdate(
      orderId,
      {
        payment: newPayment,
        status: "paid",
      },
      { new: true }
    );
    console.log({order});
    return order;
  } else {
    throw boom.notAcceptable("The payment was not completed")
  }
};

module.exports = { createPayment };
