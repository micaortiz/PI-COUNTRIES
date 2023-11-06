import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, getCountryByName } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css";
import stylesInputs from '../styles/Input.module.css'


// encontrar paises por nombre
const SearchBar = ({setCurrentPage}) => {
    // const SearchBar = ({onSearch}) => {
    // const countryName = useSelector((state) => state.allCountries)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName]=useState("")

    // const handleChange = (event) =>{
        //     const newName = event.target.value
        //     setNamec(newName)
        //     onSearch(newName)
        // }
        
        const handleChange = (event) =>{
        event.preventDefault()
        setName(event.target.value)
    }

    const handleSumit = (event) => {
        event.preventDefault()
        dispatch(getCountryByName(name))
        setName('')
        // setInput(1)
        // setPag(1)
    }


    const onSearch = ()=>{
        dispatch(getCountryByName(name))
        setCurrentPage(1)

    }

    const handleSearch = () => {
        onSearch(name)
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
        <form className={styles.searcher}>
            <input className={styles["input-form"]}type="text" onChange={handleChange} value={name} placeholder="Search Country..." />

            <button className={styles["btn"]} onClick={onSearch}  >
                <span>    
                    SEARCH
                </span>
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




        </form>
    );
}

export default SearchBar;