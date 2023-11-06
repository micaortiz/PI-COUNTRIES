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
    const countryCopy = useSelector((state) => state.countryCopy)

    // pagina actual -> al momento que se carguen sea la pag uno
    const [currentPage, setCurrentPage] = useState(1);


    /* ------------------------ FILTERS AND ORDERS ------------------------ */


    const allActivity =  useSelector((state) => state.allActivity)



    // const filteredCountries = useSelector((state) => state.filteredCountries)

    const activities = useSelector((state) => state.activities)
    const [aux, setAux] = useState(false)


    // let filtroActivity = allActivity.filter(c => {
    //     if(c.activities[0] !== undefined){ 
    //         return c.activities
    //     }})

    // let arrayActivity = filtroActivity.map(c => c.activities[0]['name'])

    // let arrayActivity1 = arrayActivity.filter((item,index)=>{
    //     return arrayActivity.indexOf(item) === index;
    //   })

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
        aux ? setAux(false) : 
        setAux(true);
        // setCurrentPage(1)

    }

    const handleFilterByActivity = (event) =>{
        dispatch(filterActivity(event))
        setCurrentPage(1)

        aux ? setAux(false) : 
        setAux(true);
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
            {/* <div> */}

            {/* <Nav/> */}
            {/* verificar si dps el search esta bien o va dentro de nav  */}
            {/* <h2 className="home-title">Countries</h2> */}
            {/* {
                allCountries.slice(firstIndex, lastIndex)
            } */}

            <SearchBar 
                setCurrentPage={setCurrentPage}
                onSearch={handleSearchByName}
            /> 

            <FilterOrder
                orderCountry={handleOrderName}
                orderPopulations = {handleOrderPopulations}
                filterByContinent = {handleFilterByContinent}
                filterByActivity = {handleFilterByActivity}
                // setCurrentPage={setCurrentPage}
            />
            <Cards 
                allCountries = {
                filteredCountries?.length > 0 ? filteredCountries : allCountries}
                currentPage = {currentPage}
                setCurrentPage = {setCurrentPage}
                // firstIndex = {firstIndex}
                // lastIndex = {lastIndex}
                // , 
                // activities={country.Activities}
                /> 

        {/* </div> */}
            {/* <Pagination 
                                // countriesPerPage={countriesPerPage} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                                // setCountriesPerPage={setCountriesPerPage} 
                elementsPerPage={elementsPerPage}
                totalNumCountries={totalNumCountries}
            /> */}


        </div>
    );
}

export default Home;