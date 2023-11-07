const { Country, Activities } = require('../db.js')
const axios = require('axios')
const URL = 'http://localhost:5000/countries'
// const URL_ACT ='http://localhost:5000/activities'

// const activities= [
//     {
      
//       name: "Hiking",
//       difficulty: 3,
//       duration: 4,
//       season: "Autumn",
//       countries: ["COL", "PER", "ARG"]
//     },
//     {
      
//       name: "Camping",
//       difficulty: 2,
//       duration: 3,
//       season: "Spring",
//       countries: ["GRC", "DEU", "BEL"]
//     },
//     {
      
//       name: "Snowboarding",
//       difficulty: 5,
//       duration: 2,
//       season: "Winter",
//       countries: ["CAN", "ARG", "CHE", "JPN"]
//     },
    // ,{
      
    //   "name": "Surfing",
    //   "difficulty": 3,
    //   "duration": 2,
    //   "season": "Summer",
    //   "countries": ["AUS", "CRI"]
    // },
    // {
      
    //   "name": "Swimming",
    //   "difficulty": 1,
    //   "duration": 1,
    //   "season": "Summer",
    //   "countries": ["KOR", "ESP"]
    // }
//   ]



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

        //  await Country.findOrCreate({where: {id, name, flags, continents, capital, subregion, area, population}})

        console.log('### Database loaded successfully ###');


    } catch (error) {
        console.log(error.message);
    }

    // try {
    //     activities.map(async(country) => {
    //        await axios.post(URL_ACT, country) 
    //     })
    // } catch (error){
    //     throw Error(error.message)
    // }

}


module.exports = {
    // loadBd,
    dbConnect
}


