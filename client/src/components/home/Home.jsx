import { useDispatch, useSelector } from "react-redux";
import Cards from "../cards/Cards";
import FilterOrder from "../filterOrder/FilterOrder";
import Nav from "../nav/Nav";
import SearchBar from "../searchBar/SearchBar";
import { useState } from "react";
import { filterActivity, filterContinent, getCountryByName, orderCountry, orderPopulations } from "../../redux/actions/actions";
import Pagination from '../pagination/Pagination';
import "./Home.styles.css"


const Home = () => {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.allCountries)
    const filteredCountries = useSelector((state) => state.filteredCountries)
    
    // pagina actual -> al momento que se carguen sea la pag uno
    const [currentPage, setCurrentPage] = useState(1);


    /* ------------------------ FILTERS AND ORDERS ------------------------ */


    // const allActivity =  useSelector((state) => state.allActivity)

    // const filteredCountries = useSelector((state) => state.filteredCountries)

    // const activities = useSelector((state) => state.activities)
    const [aux, setAux] = useState(false)


    const handleOrderName = (event)=>{
        dispatch(orderCountry(event))
        // aux ? setAux(false) :
         setAux(true);
        //  setCurrentPage(1)
    }

    const handleOrderPopulations = (event)=>{
        dispatch(orderPopulations(event))
        // aux ? setAux(false) : 
        setAux(true);
        // setCurrentPage(1)

    }

    const handleFilterByContinent = (event)=>{
        dispatch(filterContinent(event))
        // aux ? setAux(false) : 
        setAux(true);
        // setCurrentPage(1)

    }

    /*  --------------------------------------  */

    const handleSearchByName = (name) =>{
        dispatch(getCountryByName(name))
        aux ? setAux(false) : 
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