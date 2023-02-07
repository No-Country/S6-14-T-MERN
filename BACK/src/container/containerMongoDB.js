const { response } = require("express");
const mongoose = require("mongoose");
const { mongoDb } = require("../utils/config.js");

class ContainerMongoDB {
  constructor(model) {
    this.model = model;
  }

  async connect() {
    try {
      const strConn = mongoDb.connectionString;
      const conn = await mongoose.connect(strConn, mongoDb.options);
      console.log("base de datos mongoDB conectada!");
    } catch (error) {
      console.log("error al conectar");
      console.log(error);
    }
  }


  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("Base de datos mongoDB desconectada!");
    } catch (error) {
      console.log("error al desconectar base de datos");
      console.log(error);
    }
  }

  async save(obj) {
    try {
      let response = await this.model.create(obj);
      console.log(`Documento insertado`, response);
    } catch (error) {
      console.log("error al guardar documento");
      return (error)
    }
  }

  async getAll() {
    try {
      let response = await this.model.find();
      return response;
    } catch (error) {
      console.log("error al buscar documentos");
      console.log(error);
    }
  }

  async findOneById(id) {
    try {
      let response = await this.model.findOne({ _id: id });
      return response;
    } catch (error) {
      console.log("error al buscar documento");
      console.log(error);
    }
  }

  async findOneByName(value) {
    try {
      let response = await this.model.findOne({ username: value });
      console.log(value);
      console.log("documentos encontrados", response);
    } catch (error) {
      console.log("error al buscar documento");
      console.log(error);
    }
  }

  async deleteAll() {
    try {
    } catch (error) {
      console.log("error al borrar todo");
      console.log(error);
    }
  }

  async deleteOne(id) {
    try {
      const data = await this.model.updateOne({ _id: id }, { isActive: false });
      return data
    } catch (error) {
      console.log("error al borrar");
      console.log(error);
    }
  }

  async updateOne(username, obj) {
    try {
      await this.model.findOneAndUpdate({ username: username }, obj);
    } catch (error) {
      console.log("error al modificar");
      console.log(error);
    }
  }

  async destroyOne(id){
    try {
      await this.model.deleteOne({_id: id})
    } catch (error) {
      console.log("error al borrar");
      console.log(error);
    }
  }

}

module.exports = ContainerMongoDB;
