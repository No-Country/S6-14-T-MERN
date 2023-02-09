const { model, Schema } = require("mongoose");

const paymentSchema = new Schema({
  order: { type: Schema.Types.ObjectId, ref: "orders" },
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
});

const userSchema = new Schema(
  {
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
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    payments: [paymentSchema],
    imageUrl: {
      type: String,
      required: true,
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
