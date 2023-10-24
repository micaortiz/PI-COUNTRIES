const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo en bd se define como Countries

  sequelize.define('Country', {
    id:{ //codigo de tres letras
      type:DataTypes.STRING(3), //almacena hasta 3 caracteres de longitud
      allowNull: false,
      primaryKey: true,
      // autoIncrement: true

    },
    name: { //name.oficial 
      type: DataTypes.STRING,
      allowNull: false,
    },
    // image ->flags.png
    flags:{
      type: DataTypes.STRING,
      allowNull: false
    },
    continents:{ // []
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false

    },
    capital:{ //capital[]
      type: DataTypes.STRING,
      allowNull: false

    },
    subregion:{ 
      type: DataTypes.STRING
    },
    area:{
      type: DataTypes.INTEGER
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull: false


    }
  },
  { timestamps: false }
  );
};