const userModel = require("../models/users.model");
const bcrypt = require("bcrypt");
const boom = require("@hapi/boom");
const {
  uploadImg,
  deleteImg,
  getImgFromQuery,
} = require("../utils/firebase.utils");

//Traer todos los usuarios
const getUsers = async () => {
  const users = await userModel.find();
  return users;
};

//Traer un usuario
const getOneUser = async (req) => {
  const { id } = req.params;

  const user = await userModel.findOne({ _id: id });

  if (!user) {
    throw boom.badRequest("The user doesn't exist");
  }
  return user;
};

//Crear Usuarios
const createUser = async (req) => {
  const { firstName, lastName, email, address, password, imageUrl, isAdmin } =
    req.body;

  const user = new userModel({
    firstName,
    lastName,
    email,
    address,
    password,
    imageUrl,
    isAdmin,
  });

  const emailExist = await userModel.findOne({ email });
  if (emailExist) {
    throw boom.badRequest("The user Already exists");
  }

  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(password, salt);

  const newUser = await user.save();
  return newUser;
};


//Actualizar usuario
const updateUser = async (req, res) => {
  const { id } = req.params;

  const { email, password, ...user } = req.body;

  const userUpdate = await userModel.findByIdAndUpdate({ _id: id }, user, {
    new: true,
  });
  return userUpdate;
};


//Borrar usuario
const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await userModel.findOne({ _id: id });
  if (!user) {
    throw boom.badRequest("The user doesn't exist");
  }

  const deleteUser = await userModel.deleteOne({ _id: id }, { new: true });
  return deleteUser;
};


//Buscar usuario
const searhUsers = async (req, res) => {
  const { searUser } = req.query;
  const nameRegex = `^${searUser}`;
  const searchResults = await userModel.find({
    name: { $regex: new RegExp(nameRegex, "i") },
  });
  console.log(searchResults);

  if (searchResults.length == 0) {
    const all = await userModel.find();

    const searchResults = all.filter((user) =>
      user.firstName.includes(searchProduct)
    );
    const searchResults2 = all.filter((user) =>
      user.lastName.includes(searchProduct)
    );
    //Si un objeto de result contiene similitud con un resultado de result2 el mismo conserbara
    //los cambios de result2 y agregara los que la primera busqueda no contiene
    let searchResults3 = [...searchResults, ...searchResults2];
    if (searchResults3.length < 0) {
      return res
        .send({ message: "No se encontraron resultados para esta búsqueda" })
        .status(200);
    }
    // const productsWithImgs = await getImgFromQuery(searchResults3);
    // return productsWithImgs;
  }

  // const productsWithImgs = await getImgFromQuery(searchResults);
  // return productsWithImgs;
  // res.send(searchResults).status(200);
};

module.exports = { getUsers, getOneUser, createUser, updateUser, deleteUser, searhUsers };
