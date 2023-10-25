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

// verificar si va en controller o en handler
router.get('/countries', (req, res)=>{ // ok
    const { name } = req.query;
    if(!name){
        getAllCountries(req, res)
        // http://localhost:3001/countries
    }else{
        getCountryByName(req, res)
        // http://localhost:3001/countries?name=argenti
    }
})

router.get('/countries/:id', getCountryById) // ok
// http://localhost:3001/countries/ARG

router.post('/activities', postActivity) // ok
router.get('/activities', getAllActivities) // ok
// http://localhost:3001/activities


router.put('/activities/:id', updateActivity) // ok

// router.get('/countries', getAllCountries)
// router.get('/countries/name', getCountryByName)

module.exports = router;
