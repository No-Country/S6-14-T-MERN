const { model, Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    user: [{ type: Schema.Types.ObjectId, ref: "users" }],
    status: {
      name: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        required: false,
      },
      updatedAt: {
        type: Date,
        required: false,
      },
    },
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
      createdAt: {
        type: Date,
        required: false,
      },
      updatedAt: {
        type: Date,
        required: false,
      },
    },
    amount: {
      type: Number,
      required: true,
    },
    itemsQ: {
      type: Number,
      required: false,
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: false,
    },
    billingAddress: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    models: {
      type: String,
      required: false,
    },
    colorBase: {
      type: String,
      required: true,
    },
    colorSecond: {
      type: String,
      required: true,
    },
    withShorts: {
      type: Boolean,
      default: false,
      required: true,
    },
    withSockets: {
      type: Boolean,
      default: false,
      required: true,
    },
    players: {
      // ver tipo
      type: String,
      required: false,
    },
    shield: {
      type: String,
      required: true,
    },
    shieldPos: {
      type: String,
      required: true,
    },
    advertise: {
      type: String,
      required: true,
    },
    advertisePos: {
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
    }
  },
  { timestamps: true }
);

const orderModel = model("orders", orderSchema);

module.exports = orderModel;
