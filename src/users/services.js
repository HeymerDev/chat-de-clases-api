const { ObjectId } = require("mongodb");
const { DataBase } = require("../database/index");

const COLLECTION = "users";

const getAll = async () => {
  const collection = await DataBase(COLLECTION);
  return await collection.find({}).toArray();
};

const getById = async (id) => {
  const collection = await DataBase(COLLECTION);
  return await collection.findOne({ _id: new ObjectId(id) });
};

const getName = async (username) => {
  const collection = await DataBase(COLLECTION);
  const user = await collection.findOne({ username: username });
  return user;
};

const create = async (user) => {
  const collection = await DataBase(COLLECTION);
  let result = await collection.insertOne(user);
  return result.insertedId;
};

module.exports.UsersService = {
  getAll,
  getById,
  getName,
  create,
};
