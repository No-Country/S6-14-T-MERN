const { model, Schema } = require("mongoose");

const orderSchema = new Schema({
    user: [
        {type: Schema.Types.ObjectId, ref: 'users'}
    ],
    status: [
        {type: Schema.Types.ObjectId, ref: 'statuses'}
    ],
    products: {
        // completar embedding
    },
    amount: {
        type: Number,
        required: true
    },
    itemsQ: {
        type: Number,
        required: false
    },
    shippingAddress: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: false
    },
    billingAddress: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    models: {
        type: String,
        required: false
    },
    colorBase: {
        type: String,
        required: true
    },
    colorSecond: {
        type: String,
        required: true
    },
    withShorts: {
        type: Boolean,
        default: false,
        required: true
    },
    withSockets: {
        type: Boolean,
        default: false,
        required: true
    },
    players: {
        // ver tipo
    },
    shield: {
        type: String,
        required: true
    },
    shieldPos: {
        type: String,
        required: true
    },
    advertise: {
        type: String,
        required: true
    },
    advertisePos: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    },
});

const orderModel = model("orders", orderSchema);

module.exports = orderModel;