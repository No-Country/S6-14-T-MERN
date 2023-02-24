const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    orders: {
      user: [{ type: Schema.Types.ObjectId, ref: "users" }],
      products: {
        name: {
          type: String,
          required: true,
        },
        shortDescription: {
          type: String,
          required: false,
        },
        largeDescription: {
          type: String,
          required: false,
        },
        price: {
          type: Number,
          required: true,
        },
        imageUrl: {
          type: String,
          required: false,
        },
        type: {
          type: String,
          required: true,
        },
        category: {
          type: Schema.Types.ObjectId,
          ref: "categories",
        },
      },
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
    googleId: {
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
