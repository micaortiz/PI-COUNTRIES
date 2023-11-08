const { Country, Activity } = require('../db.js')


// obtener actividades que tienen asociadas paises 
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











/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
    Obtine un arreglo de objetos 
 1. Utilizando el metodo 'findAll' busca en la tabla de Activity de la base de 
 datos a todas las actividades (o todos los registros). Utilizando el include 
 para incluir la informacion de los paises relacionados a cada actividad. 
 (Que ademas incluyan al modelo Contry con sus 
 respectivos atributos)
 2. Si se encontraron las actividades devuelve una respuesta 200 y sino 400
 3. Await espera que la promesa se resuleva antes de continuar. El await se 
 utiliza para esperar a que la operación de búsqueda realizada por Activity.findAll 
 se complete antes de continuar con la ejecución del código. 

    -------------------------------------
 Se utiliza para obtener una lista de actividades y, para cada actividad, 
 recuperar información detallada de los países relacionados a esa actividad

*/