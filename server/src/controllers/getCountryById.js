const { Country, Activity } = require('../db.js')

// GET | /countries/:idPais**
// -  Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
// -  El país es recibido por parámetro (ID de tres letras del país).
// -  Tiene que incluir los datos de las actividades turísticas asociadas a este país.

const getCountryById = async (req, res) =>{
    try {
        const { id } = req.params
        
        // const country = await Country.findOne({
        //     where: { idPais: idPais },
        
            //  incluye las act asociadas al pais filtrado
        //     include: Activity,
        //   });

        //? VER CUAL FUNCIONA MEJOR ENTRE ESAS 2 

        const country = await Country.findByPk( id.toUpperCase(),{
            // incluye las act asociadas al pais filtrado
            include: {model: Activity},
          });

        if(country){

            return res.status(200).json({country})
        }
        else{
            return res.status(404).send('Country not found')
        }


    } catch (error) {
        return res.status(500).send(error.message);
    

    }
}

module.exports={
    getCountryById
}