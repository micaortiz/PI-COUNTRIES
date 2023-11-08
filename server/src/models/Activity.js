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
      type: DataTypes.ENUM('1','2','3','4','5'), //limitar opciones
      allowNull: false,

    },
    duration:{
        type: DataTypes.INTEGER
      
    },
    season:{
        type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
        allowNull: false
    }

  },
  { timestamps: false }
  );
};




/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
* -- ENUM -- 
se utiliza para limitar las opciones de valores en una columna a un 
conjunto específico y predefinido de opciones, lo que ayuda a garantizar 
la consistencia y calidad de los datos en una base de datos.


*/