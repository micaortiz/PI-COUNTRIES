import { 
    CLEAN,
    CLEAN_DETAIL, 
    
    GET_ALL_COUNTRIES, 
    GET_COUNTRY_BY_ID, 
    GET_COUNTRY_BY_NAME, 

    CREATE_ACTIVITY, 
    GET_ALL_ACTIVITIES, 

    FILTER_ACTIVITY, 
    FILTER_CONTINENTS, 
    ORDER_COUNTRY, 
    ORDER_POPULATIONS 
} from "../actions/action-types";

const initialSte = {
    allCountries: [], // almacena a todos los paises
    countryCopy: {}, // almacenar una copia de los datos originales 
    countryDetail: [], //  almacena el detalle de un pais
    activityCountry: [], // almacena la actividad asociada a un pais
    countryName : [], // almacena el pais filtrado por nombre
    activities: [], // almacena la actividad creada
    filteredCountries : [], // almacenar una copia de los datos originales y guarda filtros y ordenamientos 
    allActivities : [],
    originalCountries : []
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
                
                countryCopy: action.payload,
                // .sort((a, b) => a.name.localeCompare(b.name)),

                filteredCountries: action.payload,
                // .sort((a, b) => a.name.localeCompare(b.name))
                allActivities : action.payload,
                
                originalCountries : action.payload

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

        case CLEAN :
            return{
                ...state,
                filteredCountries:[]
            }    
        case GET_COUNTRY_BY_NAME:
            // const nameFound= [...state.allCountries].find((country)=>{
                // return country.name === action.payload
            // })

            
            return{
                ...state,
                // countryName: nameFound
                // countryCopy: action.payload,
                // countryDetail: [],
                // allCountries: action.payload,
                // countryName: action.payload,
                // filteredCountries: [...action.payload.allCountries]
            }
        
        case CREATE_ACTIVITY:
            return{
                // copia solamente de activities
                ...state.activities,
                // activities: action.payload
            }
        

        // todas las activities
        // case GET_ALL_ACTIVITIES:
        //     // const filterByActivity = [...state.activityCountry]
        //     console.log('GET ALL ACTIVITIES');
        //     return{
        //         ...state,
        //             activities: action.payload
        //         // activityCountry: action.payload
        //     }

// ------------------- FILTRADOS -------------------

        case FILTER_CONTINENTS:
            // en caso de alguna modificacion en el arrlego original es mejor obtener una copia 
            let filterByContinents = state.allCountries
            if(action.payload !== 'ALL'){
                filterByContinents  = state.allCountries.filter((country) => {
                    return country.continents.includes(action.payload);
                })
                
                // console.log(filterByContinents + 'filtro de actividades');
            }

            return{
                ...state,
                filteredCountries: filterByContinents
            }







        case FILTER_ACTIVITY:
            // let filterByActivity = state.activityCountry
            // let filterByActivity = state.activities
            // console.log('Estas son el filtro de actividades');
            // if(action.payload !== 'ALL'){
            //     filterByActivity = state.activityCountry.filter((ctry)=>
            //     ctry.Activities.some(
            //         (activity) => activity.name == action.payload
            //     ))
            // }
            // console.log(filterByActivity);
            // return{
            //     ...state,
            //     filteredCountries: filterByActivity
            // }
            let mapCountries = action.payload === 'ALL' ? state.countryCopy : state.countryCopy.filter((ctry)=>{
                let mapAc = ctry.activities?.map(d => d.name)
                if(mapAc.includes(action.payload)){
                    return ctry
                }
            })

            return{
                ...state,
                filteredCountries: mapCountries
                // allCountries: mapCountries
            }









// ------------------- ORDENAMIENTOS -------------------


        case ORDER_COUNTRY:
            // tengo que hacer una copia de los paises filtrados
            //por lo que el state esta mal va en el pais que filtre
            const orderCountry = [...state.filteredCountries] 

            if(action.payload === 'ASC'){
                console.log('Ordenando paises ascendente');
                orderCountry.sort((a, b) => a.name.localeCompare(b.name))
            }else if(action.payload === 'DESC'){
                console.log('Ordenando paises descendente');
                orderCountry.sort((a, b) => b.name.localeCompare(a.name))
            }

            return{
                ...state,
                // debo poner al pais filtrado antes y dps ordenarlo
                // allCountries: orderCountry
                filteredCountries : orderCountry
            }

        case ORDER_POPULATIONS:
            const orderPopulations = [...state.filteredCountries] 

            if(action.payload === 'ASC_POP'){
                console.log('Ordenando poblacion ascendente');
                orderPopulations.sort((a, b)=> a.population - b.population )
            }else if (action.payload === 'DESC_POP'){
                console.log('Ordenando poblacion descendente');
                orderPopulations.sort((a, b)=> b.population - a.population )
                
            }

            return{
                ...state,
                filteredCountries: orderPopulations
            }



        default:
        return { ...state };
    }
}

export default reducer