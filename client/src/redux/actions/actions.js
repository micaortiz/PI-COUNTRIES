import axios from 'axios';
import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID,GET_COUNTRY_BY_NAME, FILTER_CONTINENTS, CREATE_ACTIVITY, ORDER_COUNTRY, CLEAN_DETAIL } from "./action-types";

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

export const cleanDetailCountry = () =>{
    return ({
        type: CLEAN_DETAIL
    })
}



// ok-----
export const getCountryByName = (name) => {
    return async (dispatch) => {
        try {
        const {data} = await axios.get(`${URL_BASE}/countries?name=${name}`)
        // http://localhost:3001/countries/name?name=argent
        return dispatch({
            type: GET_COUNTRY_BY_NAME,
            payload: data
        });
    
        } catch (error) {
            throw Error(error.message)  
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


export const FilterContinent = (continent)=>{
    return {
        type: FILTER_CONTINENTS,
        payload: continent
    }
}

//? el filter es por name o por difficulty 
// export const FilterActivity = (name)=>{
//     return {
//         type: FILTER_ACTIVITY,
//         payload: name
//     }
// }

export const OrderCountry = (orden)=>{
    return{
        type: ORDER_COUNTRY,
        payload: orden
    }
}