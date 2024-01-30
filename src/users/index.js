const express = require("express");

const router = express.Router();

module.exports.UserAPI = (app) => {
  app.use("/api/users", router);
};
