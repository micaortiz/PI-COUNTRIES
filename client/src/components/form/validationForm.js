const validation = (activityData)=>{
    const errors ={}
    
    /* name */
    // trim() eliminar espacios adelante y al final 
    if(!activityData.name.trim()){

        errors.name = 'Activity name is required'
        // 'Se requiere el nombre de la actividad'
    }else if (/\d/.test(activityData.name)){
        errors.name = 'Activity name cannot contain numbers'
        // 'El nombre de la actividad no puede contener números'
    }

    /* difficulty */
    if(!activityData.difficulty){
        errors.difficulty = 'You must select a difficulty'
        // 'Debes seleccionar una dificultad'
        // 'Se requiere seleccionar una dificultad'
    }

    /* duration no hace falta*/
    if (!activityData.duration || isNaN(activityData.duration) || activityData.duration < 0) {
        errors.duration = 'Duration must be a valid number'
        // 'La duración debe ser un número válido';
    }else if (activityData.duration < 1) {
     // }else if (activityData.duration < 1 || activityData.duration >12) {
        errors.duration = 'Duration must be at least 1 hour'
        // 'La duración debe de al menos una hora';
    }else if (activityData.duration > 48){
        errors.duration = 'Duration cannot exceed 48 hours'
        // 'La duración no puede exceder las 48 hs';

    }

    /* season */
    if (!activityData.season) {
        errors.season = 'You must select a season'
        // 'Debes seleccionar una temporada'
        // 'Selecciona al menos una temporada';
    }

    // if(!activityData.countries){
    //     errors.countries = 'Selecciona al menos un pais para realizar la actividad'
    // }
    if(activityData.countries.length === 0){
        errors.countries = 'Select at least one country to perform the activity'
        // 'Selecciona al menos un pais para realizar la actividad'
    }
    return errors
}
export default validation