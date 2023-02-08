const { model, Schema } = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: false
    },
    largeDescription: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId, ref: "categories",
    },
    createdAt: {
        type: Date,
        required: false
    },
    updatedAt: {
        type: Date,
        required: false
    },
});

const productModel = model("products", productSchema);

module.exports = productModel;