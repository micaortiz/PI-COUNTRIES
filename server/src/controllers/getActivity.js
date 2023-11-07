const { Country, Activity } = require('../db.js')

// GET | /activities**

// -  Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.

// actividades que tienen asociadas paises 
const getAllActivities = async(req, res) =>{
    try {
        const activities = await Activity.findAll(
            { 
                include: {
                    model: Country,
                    attributes: ["id", "name", "flags", "continents", 
                    "capital","subregion", "area", "population"],
                    through: {
                        attributes: [],
                    },

                }
            
            } 
        )

        if(activities.length>0){
            return res.status(200).json(activities)
        }
        
        return res.status(400).send('Activities not found')

    } catch (error) {
        return res.status(500).json({error: error.message}) 
    }
}

module.exports={
    getAllActivities
}