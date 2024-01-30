const createError = require("http-errors");
const debug = require("debug")("app:module-users-controller");

const { UserService } = require("./services");
const { Response } = require("../common/response");

module.exports.UsersController = {
  getUsers: async (req, res) => {
    try {
      let users = await UserService.getAll();
    } catch (error) {}
  },

  getUser: async (req, res) => {},

  createUser: async (req, res) => {},
};
