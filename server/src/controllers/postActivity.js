const { Country, Activity } = require('../db.js')

// POST | /activities**

// -  Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
// -  Toda la información debe ser recibida por body.
// -  Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).

const postActivity = async(req, res)=>{
    try {
        const { name, difficulty, duration, season, countries } = req.body 

        if(!name || !difficulty || !season || !countries || countries.length === 0 ){ // array vacio
            return res.status(400).send('Missing important data')
        }

        // crear en la bd 
       const createActivity = await Activity.create({
            name, difficulty, duration, season
        })

        // si hay countries se asocia a la actividad
        if(countries && countries.length > 0 ){

            const countryAct = await Country.findAll({ // buscar obj de tipo Country donde el id sea igual a los seleccionados 
                where: {id: countries}
            })

            // Asocia los países recuperados a la actividad recién creada
            await createActivity.setCountries(countryAct)
        }

        if(createActivity){
            return res.status(201).json(createActivity)
            // `Activity ${name} has been created`
        }
    } catch (error) {
        return res.status(400).send(error.message);        
    }
}

module.exports={
    postActivity
}

// http://localhost:3001/activities TIPO POST
// {
   
//   "name": "Alquilar Disfraces",
//   "difficulty": "1",
//   "duration": "2",
//   "season": "Primavera",
//   "countries": "ARG"

// }