const createError = require("http-errors");
const debug = require("debug")("app:module-users-controller");

const { UsersService } = require("./services");
const { Response } = require("../common/response");

module.exports.UsersController = {
  getUsers: async (req, res) => {
    try {
      let users = await UsersService.getAll();
      Response.success(res, 200, "Lista de Usuarios", users);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },

  getUser: async (req, res) => {
    try {
      const { id } = req.body;
      let user = await UsersService.getById(id);
      if (!user) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.success(res, 200, `Usuario ${id}`, user);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },

  createUser: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertedId = await UsersService.create(body);
        Response.success(res, 201, "Usuario Creado", insertedId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      console.log(password);
      let user = await UsersService.getName(username);
      console.log(user.password);

      // Verificar la existencia del usuario antes de asignar a la sesión
      if (!user) {
        Response.error(res, new createError.NotFound());
      } else if (user.password == password) {
        return res.send(username);
        // Response.success(res, 200, "Usuario encontrado", user);
      } else if (user.password !== password) {
        Response.error(res, new createError.Unauthorized());
        return;
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
};
