const { model, Schema } = require("mongoose");
const { productSchema } = require("./products.model");

const orderSchema = new Schema(
  {
    user: [{ type: Schema.Types.ObjectId, ref: "users" }],
    products: [productSchema],
    style: {
      type: String,
      required: true,
    },
    colorBase: {
      type: String,
      required: true,
    },
    colorSecond: {
      type: String,
      required: true,
    },
    backNumberColor: {
      type: String,
      required: true,
    },
    backNumberStyle: {
      type: String,
      required: true,
    },
    players: {
      name: {
        type: String,
        required: true,
      },
      number: {
        type: Number,
        required: true,
      },
      shirtSize: {
        type: String,
        required: true,
      },
      shortSize: {
        type: String,
        required: true,
      },
      withSockets: {
        type: Boolean,
        required: true,
      },
      isGoalkeeper: {
        type: Boolean,
        required: true,
      },
    },
    shippingFullName: {
      type: String,
      required: true,
    },
    shippingEmail: {
      type: String,
      required: true,
    },
    shippingPhone: {
      type: String,
      required: true,
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: false,
    },
    amount: {
      type: Number,
      required: true,
    },
    priceAmount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    payment: {
      paypalId: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      meta: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const orderModel = model("orders", orderSchema);

module.exports = orderModel;
