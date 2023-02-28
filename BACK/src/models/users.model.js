const { model, Schema } = require("mongoose");
const { productSchema } = require("./products.model");

const userSchema = new Schema(
  {
    orders: {
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
      players: {
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
      },
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
    googleId: {
      type: String,
      require: false,
    },
    username: {
      type: String,
      require: false,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    recoveryToken: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel = model("users", userSchema);

module.exports = userModel;
