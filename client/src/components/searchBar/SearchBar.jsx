import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, getCountryByName } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


// encontrar paises por nombre
const SearchBar = ({onSearch}) => {
    // const countryName = useSelector((state) => state.allCountries)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [namec, setNamec]=useState('')

    const handleChange = (event) =>{
        // event.preventDefault()
        const newName = event.target.value
        setNamec(newName)
        onSearch(newName)
    }

    // const handleClick = () =>{
    //     // if(namec){
    //         dispatch(getCountryByName(namec))
    //         // navigate(`/detail/${name}`)
    //         setNamec('')
    //     // }
    // }

    // const handleReset = ()=>{
    //     dispatch(getAllCountries())
    // }
    // // useEffect(() => {
    //     console.log(countryName); // Verifica si countryName se actualiza
    //   }, [countryName]);

    return (
        <div>
            <input type="search" onChange={handleChange} value={namec} placeholder="Search Country" />

            <button onClick={() => onSearch(namec)}>
                <span>SEARCH</span>
            </button>

            {/* <button onClick={handleReset}>
                <span>RESET</span>
            </button> */}









{/* 
            {
                countryName?.map((country)=>{
                    return
                })
            } */}
            {/* <p>Estoy en el SearchBar</p> */}




        </div>
    );
}

export default SearchBar;