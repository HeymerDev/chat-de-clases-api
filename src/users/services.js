const { ObjectId } = require("mongodb");
const { DataBase } = require("../database/index");

const COLLECTION = "users";

const getAll = async () => {
  const collection = await DataBase(COLLECTION);
  return await collection.find({}).toArray();
};

const getById = async (id) => {
  const collection = await DataBase(COLLECTION);
  return await collection.findOne({ _id: ObjectId(id) });
};

const create = async (user) => {
  const collection = await DataBase(COLLECTION);
  let result = await collection.insertOne(user);
  return result.insertedId;
};

module.exports.UsersService = {
  getAll,
  getById,
  create,
};
