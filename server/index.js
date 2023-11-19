/* server config */
const server = require("./src/server");
const PORT = 3001;

/* bd config */
require('dotenv').config()
const { conn } = require('./src/db.js');
const { dbConnect } = require("./src/controllers/dbConnect");

// Conexion con la bd 
conn.sync({ force: true })
  // un vez que funcione correctamente cambiar a false 
.then(() => {
  // establecer conexion con la bd
  dbConnect();
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  })

})
.catch(error => console.error(error))























/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
1. conn.sync({ force: true }): Llama al método sync en la 
instancia conn de Sequelize. El método sync se utiliza para sincronizar los 
modelos de la base de datos con la definición de los modelos en la aplicación

2. .then(() => { ... }): Se encadena un manejador de promesa para ejecutar 
código después de que la sincronización de la base de datos se haya 
completado con éxito. Dentro de este bloque, se llama a dbConnect() 
para establecer la conexión con la base de datos y luego se inicia el 
servidor web llamando a server.listen() 

          ----------------------------------------
Este código carga la configuración de la base de datos desde un archivo, 
sincroniza los modelos de la base de datos con la definición de modelos 
de la aplicación y luego inicia un servidor web en el puerto 3001. 
Durante el proceso de sincronización, la base de datos se recreará si 
ya existe, lo que es útil para desarrollo y pruebas.


*/