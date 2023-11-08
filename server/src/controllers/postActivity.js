const { Country, Activity } = require('../db.js')

// crear una actividad turística y relacionarla con los países solicitados.
const postActivity = async(req, res)=>{
    try {
        const { name, difficulty, duration, season, countries } = req.body 

        if(!name || !difficulty || !season || !countries || countries.length === 0 ){
            return res.status(400).send('Missing important data')
        }

       const createActivity = await Activity.create({
            name, difficulty, duration, season
        })

        // si hay countries se asocia a la actividad
        if(countries && countries.length > 0 ){

            const countryAct = await Country.findAll({ 
                where: {id: countries}
            })

            // Asocia los países recuperados a la actividad recién creada
            await createActivity.setCountries(countryAct)
        }

        if(createActivity){
            return res.status(201).json(createActivity)
        }

    } catch (error) {
        return res.status(400).send(error.message);        
    }
}

module.exports={
    postActivity
}











/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
 1. Extrae los datos necesarios de body para crear la actividad. Y la lista de 
 paises a la que se asociara la actividad 
 2. Se realiza una validacio para asegurarse que se ingresen todos los datos 
 necesarios 
 3. Se crea la actividad en la base de datos, tomando los valores extraidos 
 por body  (se crea un objeto)
 a la actividad creada
 5. Busca objetos de tipo country donde el id sea igua a los seleccionados en 
 la lista de paises.  El objeto where especifica que solo se deben recuperar 
 los países cuyo ID coincida con los valores del array countries. 
 6. Asocia a los paises con la actividad recien creada.  
 6.1 Se utiliza el await para esperar a que la promesa se resuelva. 
 Una vez que la promesa se resuelve, la línea de código continúa con el siguiente paso.
 7. Si la actividad se creo con exito se retorna una respuesta 201 (creacion exitosa)
 
 4. Si la lista de paises countries contiene elementos, se asocia el/los paises

            ----------------------------
 Este código se utiliza para crear una nueva actividad y asociarla a uno o 
 más países en la base de datos. Se verifica que se proporcionen todos los 
 datos necesarios y se establece la relación entre la actividad y los países seleccionados.

*/