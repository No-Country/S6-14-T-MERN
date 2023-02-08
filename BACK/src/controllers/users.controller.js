const userModel = require("../models/users.model");


const getUsers = async () => {
    const users = await userModel.find();
    return users;
  };

const getOneUser = async (req) => {
    const { id } = req.params
    
    const user = await userModel.findOne({ _id: id })
    return user
}

const createUser = async (req) => {
    const  { firstName, lastName, email, address, password,imageUrl, isAdmin } = req.body
    

    const user = new userModel({
        firstName, 
        lastName, 
        email, 
        address, 
        password,
        imageUrl, 
        isAdmin
    })
    
    const newUser = await user.save();
    return newUser
}


 module.exports = { getUsers, getOneUser, createUser }