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

    const [name, setName]=useState('')

    // const handleChange = (event) =>{
    //     // event.preventDefault()
    //     const newName = event.target.value
    //     setNamec(newName)
    //     onSearch(newName)
    // }

    const handleChange = (event) =>{
        setName(event.target.value)
    }

    const handleSumit = (event) => {
        event.preventDefault()
        dispatch(getCountryByName(name))
        setName('')
        // setInput(1)
        // setPag(1)
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
            <input type="search" name="search" onChange={e=> handleChange(e)} value={name} placeholder="Search Country..." />

            <button onClick={e=> handleSumit(e)} >
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