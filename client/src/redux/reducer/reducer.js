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
    allActivities : []

};


const reducer = (state = initialSte, action) => {
    switch (action.type) {

        case GET_ALL_COUNTRIES:

            return{
                ...state,
                // localeCompare: comparar cadena de textos
                allCountries: action.payload.sort((a, b) => a.name.localeCompare(b.name)),
                
                countryCopy: action.payload,

                filteredCountries: action.payload.sort((a, b) => a.name.localeCompare(b.name)),

                allActivities : action.payload,
                
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
            return{
                ...state,
                filteredCountries: action.payload
            }
        
        case CREATE_ACTIVITY:
            return{
                // copia solamente de activities
                ...state,
                // activities: action.payload
            }
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            };


    // ------------------- FILTRADOS -------------------

        case FILTER_CONTINENTS:

            let filterByContinents = state.allCountries
            if(action.payload !== 'ALL'){
                filterByContinents  = state.allCountries.filter((country) => {
                    return country.continents.includes(action.payload);
                })
            }

            return{
                ...state,
                filteredCountries: filterByContinents
            }

        case FILTER_ACTIVITY:
            let filterByActivity = [...state.allCountries]

            if(action.payload !== "ALL"){
                filterByActivity = filterByActivity.filter(country => country.Activities.find(activity => activity.name === action.payload))
            }

            return{
                ...state,
                filteredCountries : filterByActivity
            }

    // ------------------- ORDENAMIENTOS -------------------


        case ORDER_COUNTRY:
            // tengo que hacer una copia de los paises filtrados
            const orderCountry = [...state.filteredCountries] 

            if(action.payload === 'ASC'){
            
                orderCountry.sort((a, b) => a.name.localeCompare(b.name))
            }else if(action.payload === 'DESC'){
        
                orderCountry.sort((a, b) => b.name.localeCompare(a.name))
            }

            return{
                ...state,

                filteredCountries : orderCountry
            }

        case ORDER_POPULATIONS:
            const orderPopulations = [...state.filteredCountries] 

            if(action.payload === 'ASC_POP'){
                orderPopulations.sort((a, b)=> a.population - b.population )
            }else if (action.payload === 'DESC_POP'){
              
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













/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
 1. initialState se utiliza para definir la estructura inicial del estado

 - filter_Continents: defino un referencia directa de la lista de los paises.
 Cualquier cambio se refleja directamente en la funete original
  Filtra la lista de países (state.allCountries) para incluir solo 
  los países cuyo continente (country.continent) está incluido en la lista 
  de continentes filtrados (filterByContinents). 
  El resultado de este filtrado se almacena en la variable filteredCountries
 
  >> Filtra los países por el continente seleccionado.

  - filter_Activity: creo una copia de todos los paises
    Filtrar los países para que solo se incluyan aquellos que tengan al 
    menos una actividad cuyo nombre coincida con action.payload.

    Filtra una lista de países según la actividad seleccionada, 
    asegurando que solo los países con la actividad seleccionada se incluyan en la lista filtrada


  [...state.filteredCountries] crea una copia de los datos filtrados. 
  No altera directamente la fuente de datos original. 

  Default si no coincide con ningun Case se retorna directamente la copia del estado. 



*/


























// case FILTER_ACTIVITY:
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
    // let mapCountries = action.payload === 'ALL' ? state.countryCopy : state.countryCopy.filter((ctry)=>{
    //     let mapAc = ctry.activities?.map(d => d.name)
    //     if(mapAc.includes(action.payload)){
    //         return ctry
    //     }
    // })

    // if (payload === 'All Countries') {
    //     filterActivities = "";
    //     return {
    //         ...state,
    //         allCountries: filterContinent ? newCopyCountries.filter(country => {
    //             return (country.continents[0] === filterContinent)
    //         }) : newCopyCountries
    //     }
    // }
    // filterActivities = payload;


    /* ------------------------ */

    // let acts = state.activities;

    // let filter = acts.length && action.payload === 'ALL' ? 
    //     state.allActivities.filter(c => c.Activity.length > 0) : state.allActivities.filter(c => c.Activity.find(element => element.name === action.payload));

    // let filter = acts.length && action.payload === 'ALL' ? 
    //     state.allActivities.filter(c => c.activities && c.activities.length > 0) : 
    //     state.allActivities.filter(c => c.activities && c.activities.find(element => element.name === action.payload));

    // if(filter.length > 0){

    //     return {
    //         ...state,
    //         allCountries: filter
    //     };
    // };


    // return{
    //     ...state,
    //     filteredCountries: state.allActivities
    //     // allCountries: state.allActivities
    // }

    // case GET_COUNTRY_BY_NAME:
    //     return{
    //         ...state,
    //         // countryName: nameFound
    //         // countryCopy: action.payload,
    //         // countryDetail: [],
    //         // allCountries: action.payload,
    //         // countryName: action.payload,
    //         filteredCountries: action.payload
    //     }