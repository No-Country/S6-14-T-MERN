const {
  uploadImg,
  deleteImg,
  getImgFromObject,
} = require("../utils/firebase.utils");
const { orderModel } = require("../models/orders.model");
const mongoose = require('mongoose')

const boom = require("@hapi/boom");

const getOrders = async () => {
  const orders = await orderModel.find();
  return orders;
};

const getOneOrder = async (req) => {
  const { id } = req.params;
  const order = await orderModel.findOne({ _id: id });
  return order;
};

const getLastOrder = async (req) => {
  const lastOrder = await orderModel.find().limit(1).sort({_id:-1})
  return lastOrder;
};


const createOrder = async (req) => {
  const { body } = req;
  
  const newOrder = await orderModel.create(body);
 
  await newOrder.save();


  return newOrder

};


const deleteOrder = async (req) => {
  const { order } = req;

  await orderModel.deleteOne({ _id: order._id });
};

module.exports = { getOrders, getOneOrder, getLastOrder, deleteOrder, createOrder  };
