const { Country, Activity } = require('../db.js')


const getAllCountries = async(req, res)=>{
    try {
        const countries = await Country.findAll({
            attributes: ['id', 'name', 'flags', 'continents',"capital","subregion" ,"area","population"],
            include: {
                model: Activity,
                attributes: ["name", "difficulty", "duration", "season"],
                through: {
                    attributes: []
                }
            }
        })
        
        if(!countries){
            return res.status(400).send('Countries not found')
        }


        return res.status(200).json(countries)

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports={
    getAllCountries
}









/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
1. Se define una función asíncrona llamada getAllCountries que toma dos 
argumentos, req y res, que representan los objetos de solicitud y 
respuesta para una solicitud HTTP.
2. findAll: metodo de sequelize para buscar a todos los registros en la tabla
'Country', se especifican los atributos y se incluye al modelo Activity con sus
respectivos atributos.
3. Lo realizo de esta forma para que al momento de filtrar por actividad me traiga
los paises que tienen esas actividades asociadas
*/

