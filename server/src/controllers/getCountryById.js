const { Country, Activity } = require('../db.js')

// Esta ruta obtiene el detalle de un país específico. 
const getCountryById = async (req, res) =>{
    try {
        const { id } = req.params
  
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













/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
1. Funcion asincrona que tiene dos parametros require y respose.
2. Se extrae el id de la solicitud
3. Utilizando el metodo findByPk, busca un registro por su clave primaria. 
    3.1 Primero se convierte el id a mayusculas y luego se busca al pais 
    
4. Se incluye al modelo Actividad ya que al momento de ver el detalle de un
pais tambien se pueda ver su actividad asociada
5. Si se encontro el pais, rta 200 



*/
