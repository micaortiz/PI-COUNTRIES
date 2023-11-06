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

/* -  Botones/Opciones para **filtrar** por continente y por tipo de actividad turística.
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población. */

const URL_BASE = 'http://localhost:3001'

// ok
export const getAllCountries = () =>{
    return async (dispatch)=>{
        try {
            const {data} = await axios.get(`${URL_BASE}/countries`) // solicitud tipo get 

            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data,
            })

        } catch (error) {
            throw Error(error.message)
        }
    }
}

// ok
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
// ok
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


// ok----- NO FUNCIONA
export const getCountryByName = (name) => {
    return async (dispatch) => {
        try {
        const response = await axios.get(`${URL_BASE}/countries?name=${name}`)
        // http://localhost:3001/countries/name?name=argent
        console.log('Data');
        console.log(response.data.country);
        return dispatch({
            type: GET_COUNTRY_BY_NAME,
            payload: response.data.country,
        });
    
        } catch (error) {
            // throw Error(error.message) 
            alert('Countries name not found') 
        }
    }
};


// export const getCountryByName = (name) => {
//     return async (dispatch, getState) => {
//     try {
//             if (name.trim() === '') {
//                 // Si el valor de búsqueda está vacío, restaura la lista original
//                 const originalCountries = getState().originalCountries;
//                 return dispatch({
//                     type: SEARCH_COUNTRY,
//                     payload: originalCountries
//                 });
//             } else {
//                 // Realiza la búsqueda en función de newName
//                 const response = await axios.get(`http://localhost:3001/countries?name=${name}`)
//                 const data = response.data;
//                 return dispatch({
//                     type: GET_COUNTRY_BY_NAME,
//                     payload: data
//                 });
//             }
//         } catch (error) {
//             alert('Country name not found')
//             // throw Error(error.message);
//         }
//     } 
// }











// ok
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
 


// ok
export const filterContinent = (continents)=>{
    return {
        type: FILTER_CONTINENTS,
        payload: continents
    }
}

//? el filter es por name o por difficulty 
// export const filterActivity = (activity)=>{
//     console.log('Estoy en el filter activitiy de actions');
//     return {
//         type: FILTER_ACTIVITY,
//         payload: activity
//     }
// }


export const filterActivity = (payload)=>{
    console.log('Estoy en el filter activitiy de actions');
    return {
        type: FILTER_ACTIVITY,
        payload
    }
}





// ok
export const orderCountry = (orden)=>{
    return{
        type: ORDER_COUNTRY,
        payload: orden
    }
}

// ok
export const orderPopulations = (orden)=>{
    return{
        type: ORDER_POPULATIONS,
        payload: orden
    }
}