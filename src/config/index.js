require("dotenv").config();

module.exports.Config = {
  port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  dbName: process.env.MONGODB_NAME,
};
