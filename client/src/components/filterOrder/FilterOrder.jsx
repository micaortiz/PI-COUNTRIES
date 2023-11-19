import { useDispatch, useSelector } from "react-redux";
import { clean, filterContinent, getActivities, orderCountry, orderPopulations, filterActivity } from "../../redux/actions/actions";
import styles from "../searchBar/SearchBar.module.css"
import inputStyles from "../styles/Input.module.css";

const FilterOrder = ({ orderCountry, orderPopulations, filterByContinent}) => {

    const dispatch = useDispatch()
    /* ------------ */
    const allActivities = useSelector((state)=> state.activities);
    /* ------------ */
    // const activities = useSelector((state)=> state.activityCounty)
      
    const handleFilter = (event) =>{
       filterByContinent(event.target.value)
    }

    const handleOrder = (event) =>{
        orderCountry(event.target.value)
        
    }

    const handleOrderPopulations = (event) =>{
        orderPopulations(event.target.value) 

    }

    const handleResetFilters = () => {
        dispatch(clean());
     
    }

    const handleFilterActivity = (event) => {
        event.preventDefault();
    
        dispatch(filterActivity(event.target.value))
    }

    return ( 
        <div className={styles.all}>

            <h4 >Sort by </h4>
            
            {/* ordenar por nombre */}
            <label htmlFor="" className={styles["titles"]} >Name </label>
            <select  className={styles["order-np"]}  name=""  onChange={handleOrder}>

                <option value="ASC">A-Z</option>
                <option value="DESC">Z-A</option>
            </select>
            <br />
        

            {/* ordenar por poblacion */}
            <label htmlFor="" className={styles["titles"]}>Populations </label>
            <select className={styles["order-np"]}  name="" id="" onChange={handleOrderPopulations}>

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

            <select className={styles["filters-ca"]} onChange={ handleFilterActivity}>

            <option value="ALL">All</option>

            {allActivities && allActivities.map((activity) => {
                  return (
                    <option value={activity.name} > {activity.name} </option>
                  )
                })}

          </select>


            <br />
            {/* clean - NO FUNCIONA */}
{/*             <button onClick={handleResetFilters}>CLEAR FILTER</button>

 */}
        </div>
    );
}
 
export default FilterOrder;



















/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
 - Estas funciones llaman cuando se produce un evento on el valor seleccionado 
 en el elemento que generó el evento (event.target.value
 - event.target.value  se utiliza para determinar qué opción ha seleccionado 
 el usuario en un menú desplegable y, en función de esa selección, se 
 desencadenan acciones específicas, como el filtrado o el ordenamiento de 
 los datos en la aplicación. (opcion que el usuario elige)

 - event.preventDefault(); se puede usar para cancelar la acción predeterminada 
 de otros eventos, como eventos de teclado, eventos de mouse y eventos de carga de página.

 - onChange es definir qué acción debe llevarse a cabo cuando 
 el usuario cambia la selección en el elemento

 - Si allActivities tiene datos, se utiliza el método map() para recorrer 
 el arreglo y generar opciones para cada actividad.







*/