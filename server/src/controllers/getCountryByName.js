const { Country } = require('../db.js')
const { Sequelize } = require('sequelize') 

// GET | /countries/name?="..."**

// -  Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// -  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// -  Si no existe el país, debe mostrar un mensaje adecuado.

// ! NO FUNCIONA

const getCountryByName = async(req, res)=>{
    try {
        const { name } = req.query;
        console.log(name);
        // por si faltan ingresar datos 
        if(!name){
        
            'Nomb del pais no proporcionado'
            return res.status(400).send('Country name not provided')
        }

        // queremos encontrar una fila en la tabla Country donde la columna name cumpla con la condición específica.
        const country = await Country.findOne({
            where: {
                name: {
                     // ILIKE para buscar sin distinguir entre mayúsculas y minúsculas
                    [Sequelize.Op.iLike]: `%${name}%` 
                    //Op.iLike se utiliza para realizar busquedas insensibles a mayus y minus 
                }
            }
        })

        // if(!country){
        //     return res.status(400).send('Country not found')
        // }

        return res.status(200).json({country})

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getCountryByName
}