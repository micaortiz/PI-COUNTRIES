const { Country, Activity } = require('../db.js')

const updateActivity = async(req, res)=>{
    try {
        
        const { id } = req.params
        const { name, difficulty, duration, season, countries } = req.body;

        const activity = await Activity.findByPk(id)

        if(!activity){
            return res.status(400).send('Activities not found')
        }

        activity.name = name ? name : activity.name
        activity.difficulty = difficulty ? difficulty : activity.difficulty
        activity.duration = duration ? duration : activity.duration
        activity.season = season ? season : activity.season

        await activity.save();
        return res.status(200).json(activity)


    } catch (error) {
        return res.status(500).send(error.message)
    
    }

}

module.exports = {
    updateActivity
}