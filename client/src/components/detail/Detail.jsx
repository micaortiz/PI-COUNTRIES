import { useParams } from "react-router-dom"
import {  useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getCountryById,cleanDetailCountry } from "../../redux/actions/actions"
import styles from './Detail.module.css'


const Detail = () => {
    
    const { id } = useParams()
    const countryDetail = useSelector((state) => state.countryDetail)
    // const activityCountry = useSelector((state)=>state.activityCountry)
    const dispatch = useDispatch();

    
    useEffect(()=>{
        
        dispatch(getCountryById(id))
        // se desmonta y se limpia el estado
        return () => dispatch(cleanDetailCountry())    
    },[])
    // probar si funciona con el id dentro del array de dependencias 
    

    // useEffect(()=>{

    // },[activityCountry])
    return (
        <div>
            
            <h1 className={styles.titleDetail}>Country Information</h1>

            <div className={styles.container}>

                <div className={styles.box}>

                    <div className={styles.title}>

                        <h2>{countryDetail.name} - {countryDetail.id} </h2>
                    </div>

                    <img src={countryDetail.flags} alt={countryDetail.name} />
                    
                    <div className={styles.info}>

                        <h3>Continent: {countryDetail.continents}</h3>
                        <h3>Capital: {countryDetail.capital}</h3>
                        <h3>Subregion: {countryDetail?.subregion}</h3>
                        <h3>
                        Area: {countryDetail?.area} Km<sup>2</sup>
                        </h3>
                        <h3>Populations: {countryDetail.population}</h3>
                    </div>
                </div>
            </div>

            <h2>🚩 Activities that can be performed</h2>
            <div>
                
            </div>
            <div className={styles['activity-container']} >
                        
             {countryDetail.Activities && countryDetail.Activities.length > 0 ? (
                // Si hay actividades asociadas al país, muestra las actividades
                countryDetail.Activities.map((activity) => (
                    
                    <div key={activity.id}>
                    <h3>💢 {activity.name}</h3>
                    <p>Difficulty: {activity.difficulty}</p>
                    <p>Duration: {activity.duration} hours</p>
                    <p>Season: {activity.season}</p>
                    </div>
                ))
                ) : (
                // Si no hay actividades asociadas al país, 
                <h4 >There are no activities for this country yet!</h4>
                // Aún no hay actividades para este país
            )}

            </div>

        </div>
    );
}

export default Detail;
















/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */

/* 
 1. Extrae el id de la URL o recibido por params 
 2. Este useEffect se utiliza para actualizar el componente y para desmontar el
 componente y limpiar el estado. Ya que por segundos se ve el detalle del pais anterior 
 3. Se utiliza el useSelector para taer informacion del estado global 
 Para acceder al estado global y obtener los datos relacionados 
 con el detalle del pais 
 4. Muestra el detalle del pais 
 5. Se verifica si existen actividades asociadas al pais o si la longitud es mayor
 que 0 y se muestran.
 6. En caso que no hayan actividades asociadas se muestra el msj para indicar
 que no hay actividades disponibles 

    ----------------------------------------
 Este componente muestra información detallada sobre un país, incluyendo su 
 nombre, bandera y datos demográficos, así como las actividades que se pueden 
 realizar en ese país. La información se muestra de manera condicional, 
 dependiendo de si existen actividades asociadas al país o no.





*/

















/*                {
                    countryDetail.Activities?.map((activity) => (
                    <div key={activity.id}>
                        <h3>{activity.name}</h3>
                        <p>Difficulty: {activity.difficulty}</p>
                        <p>Duration {activity.duration} hours</p>
                        <p>Season: {activity.season}</p>
                    </div>
              ))} */

              
                {/* {
                    countryDetail.Activities?.map((activity) => (
                    <div key={activity.id}>
                        <h3>{activity.name}</h3>
                        <p>Difficulty: {activity.difficulty}</p>
                        <p>Duration {activity.duration} hours</p>
                        <p>Season: {activity.season}</p>
                    </div>
                    ))
                } */}
                        
             {/* <h4>There are no activities for this country yet</h4>  */}