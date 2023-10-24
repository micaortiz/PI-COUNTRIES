const { Country } = require('../db.js')
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
                population: country.population
            }
        })
        // bulkCreate() es un método de Sequelize que permite crear múltiples registros en una tabla de una sola vez.
        await Country.bulkCreate(countriesMap)

        console.log('### Database loaded successfully ###');


    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    // loadBd,
    dbConnect
}


