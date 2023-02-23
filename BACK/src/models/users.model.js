const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    orders:{
      // embed
    },
    googleId: {
      type: String,
      require: false
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
