import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clean, filterContinent, getActivities, orderCountry, orderPopulations, filterActivity } from "../../redux/actions/actions";
import styles from "../searchBar/SearchBar.module.css"
import inputStyles from "../styles/Input.module.css";

const FilterOrder = ({ orderCountry, orderPopulations, filterByContinent,
    // filterByActivity ,
    setCurrentPage, handleFilterAct}) => {

    const filteredCountries = useSelector((state) => state.filteredCountries)
    const allActivity =  useSelector((state) => state.allActivity)

    /* ------------ */
    const allActivities = useSelector((state)=> state.activities);
    /* ------------ */

   
    const activities = useSelector((state)=> state.activityCounty)
    const dispatch = useDispatch()


      
    const handleFilter = (event) =>{
       filterByContinent(event.target.value)
    }


    const handleOrder = (event) =>{
        orderCountry(event.target.value)
        // setCurrentPage(1)
    }

    const handleOrderPopulations = (event) =>{
        orderPopulations((event.target.value))
        // setCurrentPage(1)

    }


    const handleResetFilters = () => {
        dispatch(clean());
        // También puedes restablecer la página a 1 si es necesario
      }

    
    // const handleFilterByActivity = (event) =>{
    //     // actualFilters = event.target.value
    //     // setActualFilters((state)=>{
    //     //     return {
    //     //         ...state,
    //     //         activity: event.target.value
    //     //     }
    //     // })

    //     // filterByActivity(event.target.value)
    //     // const actualFilters = event.target.value
    //     // setActualFilters(actualFilters)

    //     /* ------- */

    //     // event.preventDefault();
    //     // dispatch(filterActivity(event.target.value));
    //     // setCurrentPage(1)
    //     /* ---------- */
    //     filterByActivity(event)
    // } 

    const handleFilterActivity = (event) => {
        event.preventDefault();
        // setActivityFilter(event.target.value)
        dispatch(filterActivity(event.target.value))
      }



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

            {/* <select className={styles["filters-ca"]} onChange={ handleFilterByActivity}> */}
            <select className={styles["filters-ca"]} onChange={ handleFilterActivity}>

            {/* Options for activity filter */}
            <option value="ALL">All</option>

            {allActivities && allActivities.map((activity) => {
                  return (
                    <option value={activity.name}   >{activity.name}</option>
                  )
                })}

           


            {/* {activities?.map((activity) => {
              return (
                <option key={activity.id} value={activity.name}>
                  {activity.name}
                </option>
              );
            })}  */}
                {/* <option value="ALL" hidden>
                    ALL
                </option> */}

                 {/* <option value="ALL">ALL</option> */}
                    
                    {/* {activityOptions.map((activity, index) => (
                        <option key={index} value={activity}>
                            {activity}
                        </option>
                    ))} */}


                    {/* {countriesWithSelectedActivity.map((country) => (
                        <li key={country.id}>{country.name}</li>
                    ))} */}

                    {/* {arrayActivity1?.map((item, index) => {
                        console.log(arrayActivity1);
                        return(
                            <option value={item} key={index}>{item}</option> 
                            )
                        })
                    } */}



          </select>
          {/* <button  type="submit" onClick={handleFilterAct}>Apply</button> */}

            <br />
            {/* clean - NO FUNCIONA */}
{/*             <button onClick={handleResetFilters}>CLEAR FILTER</button>

 */}
        </div>
    );
}
 
export default FilterOrder;