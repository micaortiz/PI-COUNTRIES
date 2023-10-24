const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo en bd se define como Activities
  sequelize.define('Activity', {

    id:{ 
      type:DataTypes.INTEGER, 
      allowNull: false,
      primaryKey: true,
      autoIncrement: true

    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    difficulty:{
        type: DataTypes.ENUM('1','2','3','4','5'),
        allowNull: false
    },
    duration:{
        type: DataTypes.INTEGER
        // type: DataTypes.FLOAT
    },
    season:{
        type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
        allowNull: false
    }

  },
  { timestamps: false }
  );
};