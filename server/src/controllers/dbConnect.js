const { Country, Activities } = require('../db.js')
const axios = require('axios')

const URL = 'http://localhost:5000/countries'

// cargar la bd con los paises de la API
const dbConnect = async() =>{

    try {
        const { data } = await axios.get(URL)

        const countriesMap = data.map((country) =>{
            return{
                id: country.cca3,
                name: country.name.common,
                flags: country.flags.png,
                continents: country.continents,

                // verificar si existe debido que hay algunos paises que no tienen capitales ..
                // si tiene valor se retorna el primer element, si no tiene valor se asigna 'Information not available' 
                capital: country.capital ? country.capital[0] : 'Information not available',
                subregion: country.subregion ? country.subregion : 'Information not available',
                area: country.area,
                population: country.population,
                latlng: country.latlng ? country.latlng: 'Information not available' 
            }
        })
        // bulkCreate() es un método de Sequelize que permite crear múltiples registros en una tabla de una sola vez.
        await Country.bulkCreate(countriesMap)

        console.log('### Database loaded successfully ###');


    } catch (error) {
     
        throw Error(error.message)
    }

}


module.exports = {

    dbConnect
}






/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */

/* 
1. Define una función asincrónica llamada dbConnect que se utiliza para cargar 
la base de datos con información de países desde la API.

2. Luego, se mapea la respuesta de la API a un formato que coincida con la 
estructura de la tabla Country en la base de datos.
    - capital: La capital del país (o "Information not available" si no se proporciona).
    - subregion: La subregión del país (o "Information not available" si no se proporciona)

3. Utilizo el método bulkCreate proporcionado por Sequelize para insertar los datos mapeados 
en la tabla Country. Esto permite crear múltiples registros en la tabla en una sola 
operación de base de datos.

4. throw Error:
Se utiliza para lanzar una excepción y detener la ejecución del programa 
cuando se produce un error o una condición excepcional que debe manejarse.

*/