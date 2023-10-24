const { Country, Activity } = require('../db.js')

// POST | /activities**

// -  Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
// -  Toda la información debe ser recibida por body.
// -  Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).

// VERIFICAR SI LOS CREA
// ! NO FUNCIONA - NO PROBADO 

const postActivity = async(req, res)=>{
    try {
        const { id, name, difficulty, duration, season, countries } = req.body 

        if(!name || !difficulty || !season || !countries ){
            return res.status(400).send('Faltan ingresar datos')
        }

        // busca o crea
        await Activity.findOrCreate({
            where: {
                name: name, difficulty: difficulty, duration: duration, season: season
            },
            include: Country
        })

        const activity =  await Activity.findAll()

        return res.status(201).json(activity)

    } catch (error) {
        return res.status(500).send(error.message);        
    }
}

module.exports={
    postActivity
}