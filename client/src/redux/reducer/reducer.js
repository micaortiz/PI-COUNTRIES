import { CLEAN,CLEAN_DETAIL, CREATE_ACTIVITY, GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, GET_COUNTRY_BY_NAME  } from "../actions/action-types";

const initialSte = {
    allCountries: [], // almacena a todos los paises
    countryCopy: {}, // almacenar una copia de los datos originales 
    countryDetail: [], //  almacena el detalle de un pais
    activityCountry: [], // almacena la actividad asociada a un pais
    countryName : [], // almacena el pais filtrado por nombre
    activities: [] // almacena la actividad creada
};

// ? filtrar por continente y por tipo de actividad turística.

// ? Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población.





const reducer = (state = initialSte, action) => {
    switch (action.type) {

        case GET_ALL_COUNTRIES:
            return{
                ...state,
                // localeCompare: comparar cadena de textos
                allCountries: action.payload.sort((a, b) => a.name.localeCompare(b.name)),
                
                countryCopy: action.payload.sort((a, b) => a.name.localeCompare(b.name))
              }
        case GET_COUNTRY_BY_ID:
            return  {
                ...state,
                countryDetail: action.payload.country,
                activityCountry: action.payload.Activities


            }
        case CLEAN_DETAIL:
            return{
                ...state,
                countryDetail: []
            }

        // case CLEAN :
        //     return{
        //         ...state,
        //         allCountries:[]
        //     }    
        case GET_COUNTRY_BY_NAME:
            // const nameFound= [...state.allCountries].find((country)=>{
                // return country.name === action.payload
            // })
            return{
                ...state,
                // countryName: nameFound
                // countryName: action.payload.country,
                // countryDetail: [],
                allCountries: action.payload.country
            }
        
        case CREATE_ACTIVITY:
            return{
                // copia solamente de activities
                ...state.activities,
                activities: action.payload
            }
        

        default:
        return { ...state };
    }
}

export default reducer