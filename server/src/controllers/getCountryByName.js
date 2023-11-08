const { Country, Activity } = require('../db.js')
const { Op } = require('sequelize') 


// obtener todos aquellos países que coinciden con el nombre recibido por query. 
const getCountryByName = async (req, res) => {
    try {
      const { name } = req.query;


      // Consulta a la DB para buscar países cuyos nombres contengan la cadena especificada 
      const country = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },

        include: {
          model: Activity,
          through: { attributes: [] },
        },
      });
  
        if(country){
            return res.status(200).json(country)
        }
        
        return res.status(400).send('Country not found')

 
    } catch (error) {
      return res.status(500).send(error.message);

    }
  };



module.exports = {
    getCountryByName
}










/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
  1. Extrae el nombre recibido por query
  2. Utilizando el metodo 'findAll' para buscar a todos los registros que coincidan
  dentro de la tabla Country. 
  3. Busqueda que contenga la cadena name
  4. Utilizo el operador 'iLike' que realiza una busqueda insensible a mayus y minus 
  5. through: { attributes: [] } No incluye metodos adicionales entre Country y Activity 


*/


















// const getCountryByName = async(req, res)=>{
//     try {
//         const { name } = req.query;
//         console.log(name);
//         // por si faltan ingresar datos 
//         if(!name){
        
//             // 'Nomb del pais no proporcionado'
//             return res.status(400).send('Country name not provided')
//         }


//         // queremos encontrar una fila en la tabla Country donde la columna name cumpla con la condición específica.
//         const country = await Country.findOne({
//             where: {
                
//             //   [Op.or]: [
//                 // Busqueda exacta al name
//                 // { name: { [Op.eq]: name } },
//                 // Busqueda que contenga la cadena name 
//                  name: { [Op.iLike]: `%${name}%` } 
//                 // iLike busqueda insensible a mayus y minus (no distingue)
//             //   ],
//             },
//             // include: { model: Activity },
//           });
      
//         if(country){
//             return res.status(200).json(country)
//         }
        
//         //  return res.status(400).send('Country not found')
        
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }
// }
