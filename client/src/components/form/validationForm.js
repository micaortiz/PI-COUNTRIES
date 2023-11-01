const validation = (activityData)=>{
    const errors ={}
    
    /* name */
    // trim() eliminar espacios adelante y al final 
    if(!activityData.name.trim()){
        errors.name = 'Se requiere el nombre de la actividad'
    }else if (/\d/.test(activityData.name)){
        errors.name = 'El nombre de la actividad no puede contener números'
    }

    /* difficulty */
    if(!activityData.difficulty){
        errors.difficulty = 'Se requiere seleccionar una dificultad'
    }

    /* duration no hace falta*/
    if (!activityData.duration || isNaN(activityData.duration) || activityData.duration < 0) {
        errors.duration = 'La duración debe ser un número válido';
    }

    /* season */
    if (!activityData.season) {
        errors.season = 'Selecciona al menos una temporada';
    }

    // if(!activityData.countries){
    //     errors.countries = 'Selecciona al menos un pais para realizar la actividad'
    // }
    if(activityData.countries.length === 0){
        errors.countries = 'Selecciona al menos un pais para realizar la actividad'
    }
    return errors
}
export default validation