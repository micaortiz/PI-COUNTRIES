const axios = require("axios");
/* server config */
const server = require("./src/server");
const PORT = 3001;

/* bd config */
require('dotenv').config()
const { conn } = require('./src/db.js');

// Conexion con la bd 
conn.sync({ force: false }).then(() => {

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

}).catch(error => console.error(error))
