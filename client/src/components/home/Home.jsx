import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cards from "../cards/Cards";
import FilterOrder from "../filterOrder/FilterOrder";
import SearchBar from "../searchBar/SearchBar";

import { filterActivity, filterContinent, getCountryByName, orderCountry, orderPopulations } from "../../redux/actions/actions";

import "./Home.styles.css"


const Home = () => {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.allCountries)
    const filteredCountries = useSelector((state) => state.filteredCountries)
    
    // pagina actual -> al momento que se carguen sea la pag uno
    const [currentPage, setCurrentPage] = useState(1);


    /* ------------------------ FILTERS AND ORDERS ------------------------ */

    const [aux, setAux] = useState(false)


    const handleOrderName = (event)=>{
        dispatch(orderCountry(event))
        
         setAux(true);
     
    }

    const handleOrderPopulations = (event)=>{
        dispatch(orderPopulations(event))

        setAux(true);
        

    }

    const handleFilterByContinent = (event)=>{
        dispatch(filterContinent(event))

        setAux(true);
    

    }

    /*  --------------------------------------  */

    const handleSearchByName = (name) =>{
        dispatch(getCountryByName(name))
        
        setAux(true);
        setCurrentPage(1)

    }

    return (
        <div className="home" >
   
            <SearchBar 
                setCurrentPage={setCurrentPage}
                onSearch={handleSearchByName}
            /> 

            <FilterOrder
                orderCountry={handleOrderName}
                orderPopulations = {handleOrderPopulations}
                filterByContinent = {handleFilterByContinent}
                // filterByActivity = {handleFilterByActivity}
                // setCurrentPage={setCurrentPage}
                // handleFilterAct = {handleFilter}
            />
            <Cards 
                allCountries = {
                filteredCountries?.length > 0 ? filteredCountries : allCountries}
                currentPage = {currentPage}
                setCurrentPage = {setCurrentPage}
            /> 

        </div>
    );
}

export default Home;











/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
    HOME renderiza a CARDS -> SEARCHBAR -> FILTROS Y ORDER 

    useState = [estado, funcion Que modifica el estado] -> array de dos posiciones

 Cuando se incia el componente aux se inicializa como false, 
 lo que indica que no se ha realizado ninguna acción especial
 
 setAux se emplea para determinar si se ha realizado alguna acción que 
 requiera una actualización en la interfaz de usuario, como el filtrado, 
 el ordenamiento o la búsqueda.

 Event representa el evento que desencadenó la llamada a esta función

 - Cards: si filteredCountries contiene elementos, allCountries se establecerá en filteredCountries.
está vacío o no tiene elementos, se asigna el valor de allCountries a la propiedad allCountries. 
En este caso, allCountries conserva su valor original.

*/