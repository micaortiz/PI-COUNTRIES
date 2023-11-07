const { Country, Activity } = require('../db.js')
const { Op } = require('sequelize') 

// GET | /countries/name?="..."**

// -  Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// -  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// -  Si no existe el país, debe mostrar un mensaje adecuado.

const getCountryByName = async (req, res) => {
    try {
      const { name } = req.query;
      console.log(name);
  
      // Consulta a la DB para buscar países cuyos nombres contengan la cadena especificada 
      const country = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        // Incluimos las actividades relacionadas a los países.
        include: {
          model: Activity,
          through: { attributes: [] },
        },
      });
  
      // Respondemos con un código de status 200 y enviamos los países encontrados en formato JSON.
      
        if(country){
            return res.status(200).json(country)
        }
        
        return res.status(400).send('Country not found')

    //   res.status(200).json(country);
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.log(error.message);
    }
  };







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

module.exports = {
    getCountryByName
}

