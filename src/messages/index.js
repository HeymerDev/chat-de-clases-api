const express = require("express");

const { MessagesController } = require("./controllers");

const router = express.Router();

module.exports.MessagesAPI = (app) => {
  router
    .get("/", MessagesController.getMessages)
    .post("/create", MessagesController.createMessage);
  app.use("/api/messages", router);
};
