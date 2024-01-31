const createError = require("http-errors");
const debug = require("debug")("app:module-messages-controller");

const { MessagesService } = require("./services");
const { Response } = require("../common/response");

module.exports.MessagesController = {
  getMessages: async (req, res) => {
    try {
      let messages = await MessagesService.getAll();
      Response.success(res, 200, "Lista de Mensajes", messages);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },

  createMessage: async (req, res) => {
    try {
      const { body } = req;

      const { username, content } = body;

      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertedId = await MessagesService.create(content, username);
        Response.success(res, 201, "Mensaje Creado", insertedId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
};
