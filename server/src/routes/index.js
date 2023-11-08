/* express config */
const { Router } = require("express");

/* controllers */
const { getAllCountries } = require('../controllers/getAllCountries');
const { getCountryById } = require("../controllers/getCountryById");
const { getCountryByName } = require('../controllers/getCountryByName');
const { postActivity } = require("../controllers/postActivity");
const { getAllActivities } = require("../controllers/getActivity");
const { updateActivity } = require("../controllers/updateActivity");

const router = Router();

/* routes */

router.get('/countries', (req, res)=>{ 
    const { name } = req.query;
    if(!name){
        getAllCountries(req, res)
    }else{
        getCountryByName(req, res)
    }
})

router.get('/countries/:id', getCountryById) 

router.post('/activities', postActivity) 
router.get('/activities', getAllActivities) 

router.put('/activities/:id', updateActivity) 

module.exports = router;














/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
 1. Se importa a los controladores para manejar las rutas
 2. Se crea una instancia de router, para definir las rutas
 3. Se extrae el name de query
 4. Se verifica si se proporciona el name, si es asi se llama al controlador 
 getCountryByName para obtener a los paises por nombre si no se proporciona 
 se llama al controlador getAllCountries para obtener a todos los paises
 5. Ruta tipo get que llama al controlador para obtener los detalles de cada
 pais
 
*/