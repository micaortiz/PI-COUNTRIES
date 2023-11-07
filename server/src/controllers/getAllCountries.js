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