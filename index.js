const express = require("express");
const cors = require("cors");

const debug = require("debug")("app:main");

const { Config } = require("./src/config/index");
const { UsersAPI } = require("./src/users/index");
const { MessagesAPI } = require("./src/messages/index");

const app = express();
app.use(express.json());

app.use(cors());

UsersAPI(app);
MessagesAPI(app);

app.listen(Config.port, () => debug(`Seerver on port ${Config.port}`));
