const { DataBase } = require("../database/index");

const COLLECTION = "messages";

const getAll = async () => {
  const collection = await DataBase(COLLECTION);
  return await collection.find({}).toArray();
};

const create = async (message, username) => {
  const collection = await DataBase(COLLECTION);
  const newMessage = {
    content: message,
    sender: username,
    createdAt: new Date(),
  };
  let result = await collection.insertOne(newMessage);
  return result.insertedId;
};

module.exports.MessagesService = {
  getAll,
  create,
};
