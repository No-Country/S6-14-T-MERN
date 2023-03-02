const { model, Schema } = require("mongoose");

const paymentSchema = new Schema(
  {
    paypalId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    meta: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const paymentModel = model("payments", paymentSchema);

module.exports = paymentModel;
