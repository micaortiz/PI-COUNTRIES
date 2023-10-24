/* server config */
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

// Middleware para agregar el prefijo "/countries" a todas las rutas. Por ej si tengo '/login' -> "/rickandmorty/login"
server.use('/countries', router )

module.exports = server;
