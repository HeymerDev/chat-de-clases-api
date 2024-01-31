const express = require("express");

const { UsersController } = require("./controllers");

const router = express.Router();

module.exports.UsersAPI = (app) => {
  router
    .get("/", UsersController.getUsers)
    .get("/:id", UsersController.getUser)
    .post("/create", UsersController.createUser)
    .post("/login", UsersController.login);
  app.use("/api/users", router);
};
