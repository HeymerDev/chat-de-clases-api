const express = require("express");
const debug = require("debug")("app:main");
const { Config } = require("./src/config/index");

const app = express();

app.use(express.json());

app.listen(Config.port, () => debug(`Seerver on port ${Config.port}`));
