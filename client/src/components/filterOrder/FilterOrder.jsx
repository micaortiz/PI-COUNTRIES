import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clean, filterContinent, getActivities, orderCountry, orderPopulations } from "../../redux/actions/actions";
import styles from "../searchBar/SearchBar.module.css"
import inputStyles from "../styles/Input.module.css";

const FilterOrder = ({ orderCountry, orderPopulations, filterByContinent,filterByActivity ,setCurrentPage}) => {

    const filteredCountries = useSelector((state) => state.filteredCountries)
    const allActivity =  useSelector((state) => state.allActivity)

    // const activities = useSelector((state)=> state.activities)
    const activities = useSelector((state)=> state.activityCounty)
    const dispatch = useDispatch()

    const [actualFilters, setActualFilters] = useState(
        // {
        // activity:''

        // }
        'ALL'
    )

    // useEffect(() => {
    //     // dispatch(clean())
    //     dispatch(getActivities(activities))
    //     // dispatch(getActivities()) // obtengo las actividades que ya estan creadas
    //   }, [activities])

      
    const handleFilter = (event) =>{
       filterByContinent(event.target.value)
    }

    // const handleXFilter = (event) => {
    //     const selectedValue = event.target.value;
        
    //     if (selectedValue !== selectedContinent) {
    //       setSelectedContinent(selectedValue); // Actualiza el valor seleccionado
    //       dispatch(filterByContinent(selectedValue)); // Despacha la acción con el nuevo filtro
    //     }
    // }


    const handleOrder = (event) =>{
        orderCountry(event.target.value)
        // setCurrentPage(1)
    }

    const handleOrderPopulations = (event) =>{
        orderPopulations((event.target.value))
        // setCurrentPage(1)

    }

    // useEffect = (()=>{
    //     dispatch(filterContinent())
    // },[])

    const handleResetFilters = () => {
        dispatch(clean());
        // También puedes restablecer la página a 1 si es necesario
      }

    
    const handleActivitySelect = (event) =>{
        // actualFilters = event.target.value
        // setActualFilters((state)=>{
        //     return {
        //         ...state,
        //         activity: event.target.value
        //     }
        // })

        filterByActivity(event.target.value)
        // const actualFilters = event.target.value
        // setActualFilters(actualFilters)
    } 

    // const activityOptions = Array.from(
    //     new Set(
    //       Array.isArray(activities)
    //         ? activities.flatMap((country) =>
    //             country.Activities.map((activity) => activity.name)
    //           )
    //         : []
    //     )
    //   );


//     const countriesWithSelectedActivity = filteredCountries.filter((country) =>
//     country.Activities.some((activity) => activity.name === actualFilters )
//   );
  

    let filtroActivity = allActivity?.filter(c => {
        if(c.Activities[0] !== undefined){ 
            return c.Activities
        }
    })

    let arrayActivity = filtroActivity?.map(c => c.Activities[0].name)

    let arrayActivity1 = arrayActivity?.filter((item,index)=>{
    return arrayActivity.indexOf(item) === index;
    })

    return ( 
        <div className={styles.all}>
            {/* <h3>Aca van los filtros y ordenamientos</h3> */}
            <h4 >Sort by </h4>
            
            {/* ordenar por nombre */}
            <label htmlFor="" className={styles["titles"]} >Name </label>
            <select  className={styles["order-np"]}  name=""  onChange={handleOrder}>
                {/* <option value="">None</option> */}
                <option value="ASC">A-Z</option>
                <option value="DESC">Z-A</option>
            </select>
            <br />

            {/* ordenar por poblacion */}
            <label htmlFor="" className={styles["titles"]}>Populations </label>
            <select className={styles["order-np"]}  name="" id="" onChange={handleOrderPopulations}>
                {/* <option value="">None</option> */}
                <option value="ASC_POP">Ascending</option>
                <option value="DESC_POP">Descending</option>
            </select>

            <br />

            <h4>Filter by</h4>

            {/* filtrar por continente */}
            <label htmlFor="" className={styles["titles"]} >Continents </label>
            <select className={styles["filters-ca"]} onChange={handleFilter}>
                <option value="ALL">All</option>
                <option value="Africa">Africa</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Oceania">Oceania</option>

            </select>
            <br />

            {/* filtrar por actividad */}
            <label htmlFor="" className={styles["titles"]}>Activities </label>


            <select className={styles["filters-ca"]} onChange={handleActivitySelect}>

            {/* Options for activity filter */}
            {/* <option value="ALL">All</option>
            {activities?.map((activity) => {
              return (
                <option key={activity.id} value={activity.name}>
                  {activity.name}
                </option>
              );
            })}  */}
                <option value="ALL" hidden>
                    ALL
                </option>

                 {/* <option value="ALL">ALL</option> */}
                    
                    {/* {activityOptions.map((activity, index) => (
                        <option key={index} value={activity}>
                            {activity}
                        </option>
                    ))} */}


                    {/* {countriesWithSelectedActivity.map((country) => (
                        <li key={country.id}>{country.name}</li>
                    ))} */}

                    {arrayActivity1?.map(item => {
                        console.log(arrayActivity1);
                        return(
                            <option value={item} key={Math.random()}>{item}</option> 
                            )
                        })
                    }



          </select>

          <select  className={styles["filters-ca"]} onChange={handleActivitySelect}> 
                    <option >ACTIVIDAD</option>
                    {arrayActivity1?.map(item => {
                        return(
                            <option value={item} key={Math.random()}>{item}</option> 
                            )
                        })
                    }
                </select>



            <br />
            {/* clean - NO FUNCIONA */}
{/*             <button onClick={handleResetFilters}>CLEAR FILTER</button>

 */}
        </div>
    );
}
 
export default FilterOrder;