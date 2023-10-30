import { CLEAN_DETAIL, GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID  } from "../actions/action-types";

const initialSte = {
    // myFavorites: [],
    allCountries: [], // almacena a todos los paises
    countryDetail: [], //  almacena el detalle de un pais
    activityCountry: [] // almacena la actividad asociada a un pais
};

const reducer = (state = initialSte, action) => {
    switch (action.type) {

        case GET_ALL_COUNTRIES:
            return{
                ...state,
                allCountries: action.payload
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
        default:
        return { ...state };
    }
}

export default reducer