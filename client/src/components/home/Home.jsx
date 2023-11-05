import { useDispatch, useSelector } from "react-redux";
import Cards from "../cards/Cards";
import FilterOrder from "../filterOrder/FilterOrder";
import Nav from "../nav/Nav";
import SearchBar from "../searchBar/SearchBar";
import "./Home.styles.css"
import { useState } from "react";
import { filterActivity, filterContinent, orderCountry, orderPopulations } from "../../redux/actions/actions";


const Home = () => {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.allCountries)

    const allActivity =  useSelector((state) => state.allActivity)



    const filteredCountries = useSelector((state) => state.filteredCountries)

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
    }

    const handleOrderPopulations = (event)=>{
        dispatch(orderPopulations(event))
        // aux ? setAux(false) : 
        setAux(true);
    }

    const handleFilterByContinent = (event)=>{
        dispatch(filterContinent(event))
        aux ? setAux(false) : 
        setAux(true);
    }

    const handleFilterByActivity = (event) =>{
        dispatch(filterActivity(event))
        // aux ? setAux(false) : 
        // setAux(true);
    }


    return (
        <div className="home">
            {/* <Nav/> */}
            {/* verificar si dps el search esta bien o va dentro de nav  */}
            <h2 className="home-title">Countries</h2>
            <FilterOrder
                orderCountry={handleOrderName}
                orderPopulations = {handleOrderPopulations}
                filterByContinent = {handleFilterByContinent}
                filterByActivity = {handleFilterByActivity}
            />
            {/* <SearchBar/>  */}
            <Cards allCountries = {
                filteredCountries.length > 0 ? filteredCountries : allCountries
                // , 
                // activities={country.Activities}
            }/> 
        </div>
    );
}

export default Home;