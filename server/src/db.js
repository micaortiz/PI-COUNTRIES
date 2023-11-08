require("dotenv").config();
const { Sequelize } = require("sequelize");

// leer el contenido del directorio
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];

// se recorre el contenido y se importa cada archivo
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// convierte en array en clave-valor
let entries = Object.entries(sequelize.models);

// convierte la primer letra en mayus, product -> Product
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);

sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

// se guarda en models 
const { Country, Activity } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

/* Relacion N:M */
Country.belongsToMany(Activity, {through: 'country_activity', timestamps: false })

Activity.belongsToMany(Country, {through: 'country_activity', timestamps: false })

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};







/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */

/* 
  Timestamps: Sequelize agrega automáticamente los campos createdAt y updatedAt a cada modelo y este metodo las ignora
1. Relacion N:M
  El A.belongsToMany(B, { through: 'C' }) asociación significa que existe una relación de Muchos a Muchos 
  entre A y B, usando la tabla C 

2. Cuando haces esto, puedes acceder a los modelos Country y Activity directamente sin tener que escribir 
  sequelize.models.Country o sequelize.models.Activity cada vez que necesites interactuar con ellos en tu código.

3. La tabla intermedia va a tener la primary key de country como de activity
  
*/