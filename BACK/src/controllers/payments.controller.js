const OrderModel = require("./../models/orders.model");
const boom = require("@hapi/boom");

const createPayment = async ({ paymentData, orderId }) => {
  const newPayment = {
    paypalId: paymentData.id,
    amount: paymentData.purchase_units[0].amount.value,
    date: new Date(),
    meta: JSON.stringify(paymentData),
  };

  if (paymentData.status === "COMPLETED") {
    const order = await OrderModel.findByIdAndUpdate(
      orderId,
      {
        payment: newPayment,
        status: {
          name: "paid",
        },
      },
      { new: true }
    );
    return order;
  } else {
    throw boom.notAcceptable("The payment was not completed")
  }
};

module.exports = { createPayment };