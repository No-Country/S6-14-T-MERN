const { model, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
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
      required: false,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "categories",
    },
  },
  { timestamps: true }
);

const productModel = model("products", productSchema);

module.exports = {productModel, productSchema};
