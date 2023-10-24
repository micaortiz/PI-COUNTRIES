/* express config */
const { Router } = require("express");

/* controllers */
const { getAllCountries } = require("../handlers/getAllCountriesHandler");
const { getCountryById } = require("../controllers/getCountryById");
const { getCountryByName } = require('../controllers/getCountryByName')

const router = Router();

router.get('/', (req, res)=>{
    const { name } = req.query;
    if(!name){
        getAllCountries(req, res)
    }else{
        getCountryByName(req, res)
    }
})


/* routes */
// router.get('/countries', getCountries)

// verificar si va en controller o en handler
router.get('/:idPais', getCountryById)

// router.get('countries/name', getCountryByName)

module.exports = router;
