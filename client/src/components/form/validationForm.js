const validation = (activityData)=>{
    const errors ={}
    
    /* name */
    // trim() eliminar espacios adelante y al final 
    if(!activityData.name.trim()){

        errors.name = 'Activity name is required'

    }else if (/\d/.test(activityData.name)){
        errors.name = 'Activity name cannot contain numbers'
    }

    /* difficulty */
    if(!activityData.difficulty){
        errors.difficulty = 'You must select a difficulty'
    
    }

    /* duration */
    if (!activityData.duration || isNaN(activityData.duration) || activityData.duration < 0) {
        errors.duration = 'Duration must be a valid number'
     
    }else if (activityData.duration < 1) {
        errors.duration = 'Duration must be at least 1 hour'

    }else if (activityData.duration > 48){
        errors.duration = 'Duration cannot exceed 48 hours'
    
    }

    /* season */
    if (!activityData.season) {
        errors.season = 'You must select a season'
        
    }

    if(activityData.countries.length === 0){
        errors.countries = 'Select at least one country to perform the activity'
    }
    return errors
}
export default validation













/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
    1. 'Se requiere el nombre de la actividad'
        1.1 'El nombre de la actividad no puede contener números'
    2.  'Debes seleccionar una dificultad'
    3.  'La duración debe ser un número válido'
        3.1 La duración debe ser de al menos una hora'
        3.2 La duración no puede exceder las 48 hs'
    4.  'Debes seleccionar una temporada'
    5.  'Selecciona al menos un pais para realizar la actividad'


*/