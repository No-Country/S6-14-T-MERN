const userModel = require("../models/users.model");
const boom = require("@hapi/boom");

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
    
    const userExist = await userModel.findOne({email})
    if (userExist) {
        throw boom.badRequest("The user Already exists");
        
    }
    const newUser = await user.save();
    return newUser
}

const updateUser = async (req,res) => {
    const { id } = req.params
    
    const { email, password, ...user } = req.body;
    
    const userUpdate = await userModel.findByIdAndUpdate({ _id: id },  user, { new: true });
    return userUpdate
}


 module.exports = { getUsers, getOneUser, createUser,updateUser }