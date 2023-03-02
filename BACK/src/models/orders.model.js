const { model, Schema } = require("mongoose");
const { productSchema } = require("./products.model");

const orderSchema = new Schema(
  {
    user: [{ type: Schema.Types.ObjectId, ref: "users" }],
    products: [productSchema],
    style: {
      type: String,
      required: false,
    },
    colorBase: {
      type: String,
      required: false,
    },
    colorSecond: {
      type: String,
      required: false,
    },
    backNumberColor: {
      type: String,
      required: false,
    },
    backNumberStyle: {
      type: String,
      required: false,
    },
    players: [{
      name: {
        type: String,
        required: false,
      },
      number: {
        type: Number,
        required: false,
      },
      shirtSize: {
        type: String,
        required: false,
      },
      shortSize: {
        type: String,
        required: false,
      },
      withSockets: {
        type: Boolean,
        required: false,
      },
      isGoalkeeper: {
        type: Boolean,
        required: false,
      },
    }],
    shippingFullName: {
      type: String,
      required: false,
    },
    shippingEmail: {
      type: String,
      required: false,
    },
    shippingPhone: {
      type: String,
      required: false,
    },
    shippingAddress: {
      type: String,
      required: false,
    },
    comments: {
      type: String,
      required: false,
    },
    amount: {
      type: Number,
      required: false,
    },
    priceAmount: {
      type: Number,
      required: false,
    },
    date: {
      type: Date,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
    payment: {
      paypalId: {
        type: String,
        required: false,
      },
      amount: {
        type: Number,
        required: false,
      },
      date: {
        type: Date,
        required: false,
      },
      meta: {
        type: String,
        required: false,
      },
    },
  },
  { timestamps: false }
);

const orderModel = model("orders", orderSchema);

module.exports = {orderModel, orderSchema};
