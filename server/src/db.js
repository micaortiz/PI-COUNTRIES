require("dotenv").config();
const { Sequelize } = require("sequelize");
// const CountryModel = require('./models/Country');
// const ActivityModel = require('./models/Activity')

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
// const { Country, Activity, User } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

/* Relacion N:M */
Country.belongsToMany(Activity, {through: 'country_activity'})

Activity.belongsToMany(Country, {through: 'country_activity'})

/* Relacion 1:N */
// User.hasMany(Activity)
// Activity.belongsTo(User)

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};