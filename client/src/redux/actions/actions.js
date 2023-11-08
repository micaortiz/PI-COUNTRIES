import axios from 'axios';
import { 
    CLEAN, 
    CLEAN_DETAIL, 

    GET_ALL_COUNTRIES, 
    GET_COUNTRY_BY_ID,
    GET_COUNTRY_BY_NAME, 

    CREATE_ACTIVITY,
    GET_ALL_ACTIVITIES, 

    FILTER_CONTINENTS, 
    FILTER_ACTIVITY, 
    ORDER_COUNTRY, 
    ORDER_POPULATIONS
} from "./action-types";


const URL_BASE = 'http://localhost:3001'


export const getAllCountries = () =>{
    return async (dispatch)=>{
        try {
            const {data} = await axios.get(`${URL_BASE}/countries`) // solicitud tipo get 

            return dispatch({  // enviar la accion 
                type: GET_ALL_COUNTRIES,
                payload: data,
            })

        } catch (error) {
            throw Error(error.message)
        }
    }
}


export const getCountryById = (id) =>{
    return async (dispatch) =>{
        try{
            const {data} = await axios.get(`${URL_BASE}/countries/${id}`)
            return dispatch({
                type: GET_COUNTRY_BY_ID,
                payload: data
            })
        }catch(error){
            throw Error(error.message)  
        }
    }
}

export const cleanDetailCountry = () =>{
    return ({
        type: CLEAN_DETAIL
    })
}
export const clean = () =>{
    return ({
        type: CLEAN
    })
}



export const getCountryByName = (name) => {
    return async (dispatch) => {
        try {
        const response = await axios.get(`${URL_BASE}/countries?name=${name}`)
        // return 
        dispatch({
            type: GET_COUNTRY_BY_NAME,
            payload: response.data,
        });
        // si no se encontraron paises 
        if (response.data.length === 0) {
            alert('Country name not found', 
            {});
        }

        } catch (error) {
            throw Error(error.message) 
            // alert('Countries name not found') 
        }
    }
};


export const postActivity = (activityData) =>{
    return async (dispatch) =>{
        try {
            const {data} = await axios.post(`${URL_BASE}/activities`, activityData)

            return dispatch({
                type: CREATE_ACTIVITY,
                payload: data
            })
            
        } catch (error) {
            throw Error(error.message)  
            
        }
    }
}

export const getActivities = () => {
    return async(dispatch) =>{
        try {
            const {data} = await axios.get(`${URL_BASE}/activities`)
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: data
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
}
 
/* ------------------ FILTERS ------------------ */
export const filterContinent = (continents)=>{
    return {
        type: FILTER_CONTINENTS,
        payload: continents
    }
}

export const filterActivity = (activitiy)=>{
    // console.log('Estoy en el filter activitiy de actions');
    // console.log(activitiy);
    return {
        type: FILTER_ACTIVITY,
        payload:activitiy
    }
    

}
/* ------------------ ORDER ------------------ */

export const orderCountry = (orden)=>{
    return{
        type: ORDER_COUNTRY,
        payload: orden
    }
}


export const orderPopulations = (orden)=>{
    return{
        type: ORDER_POPULATIONS,
        payload: orden
    }
}
















/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
 - getAllCountries: 
    1. Se exporta la funcion que es una accion de Redux para obtener una lista 
    de todos los paises  
    2. Retorna una funcion anidada que toma el parametro dispatch 
    3. Utilizando a axios para realizar una solicitud HTTP de tipo GET al servidor
    4. Una vez que se obtiene la respuesta de la solicitud, se utiliza el dispatch 
    para enviar la accion al reducer
    5. En caso de que ocurra un error se lanza una excepcion

 - postActivity:
    Define una acción de Redux que realiza una solicitud POST al servidor para 
    crear una nueva actividad utilizando los datos proporcionados en activityData   

*/