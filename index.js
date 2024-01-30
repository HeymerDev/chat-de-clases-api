const express = require("express");
const debug = require("debug")("app:main");

const { Config } = require("./src/config/index");
const { UsersAPI } = require("./src/users/index");

const app = express();

app.use(express.json());

UsersAPI(app);

app.listen(Config.port, () => debug(`Seerver on port ${Config.port}`));
