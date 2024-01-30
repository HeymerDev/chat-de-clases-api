const { MongoClient } = require("mongodb");
const debug = require("debug")("app:database");
const { Config } = require("./src/config/index");
let connection = null;

module.exports.DataBase = (collection) =>
  new Promise(async (res, rej) => {
    try {
      if (!connection) {
        const client = new MongoClient(Config.mongoURI);
        connection = await client.connect();
        debug("Nueva Conexion Realizada");
      }
      debug("Reutilizando Conexion");
      const db = connection.db(Config.dbName);
      res(db.collection(collection));
    } catch (error) {
      rej(error);
    }
  });
