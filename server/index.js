/* server config */
const server = require("./src/server");
const PORT = 3001;

/* bd config */
require('dotenv').config()
const { conn } = require('./src/db.js');
const { dbConnect } = require("./src/controllers/dbConnect");

// Conexion con la bd 
conn.sync({ force: true })
  // un vez que funcione correctamente cambiar a true o a alter:true
.then(() => {
  dbConnect();
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  })

})
.catch(error => console.error(error))
