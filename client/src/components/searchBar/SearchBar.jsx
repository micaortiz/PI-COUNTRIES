import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clean, getAllCountries, getCountryByName } from "../../redux/actions/actions";

import styles from "./SearchBar.module.css";

// encontrar paises por nombre
const SearchBar = ({setCurrentPage}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName]=useState("")

    const handleChange = (event) =>{
        // event.preventDefault()
        setName(event.target.value)
    }

    const handleSumit = (event) => {
        event.preventDefault()
        dispatch(getCountryByName(name))

    }

    const handleReset = ()=>{
        dispatch(clean())
    }

    return (
        <form className={styles.searcher}>
            <input className={styles["input-form"]}type="text" onChange={handleChange} value={name} placeholder="Search Country..." />

            <button className={styles["btn"]} onClick={handleSumit}  >
                <span>    
                    SEARCH
                </span>
            </button>


            <button onClick={handleReset}>
                <span>RESET</span>
            </button>

        </form>
    );
}

export default SearchBar;




















/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
 - SearchBar es un componente que proporciona realizar busquedas, en este caso 
 por nombre 
 - El estado local cuando se inicializa el componente se representa por cadenas
 vacias 

 - Utilizo dos handle, el primero para modificar el estado con lo que ingreso
 el usuario.
   El segundo, se utiliza para evitar que se recargue la pagina y despachar 
   la accion para obtener el nombre del pais  

 Los cambios en el campo de búsqueda se reflejan en el estado local del 
 componente, y al hacer clic en "SEARCH," se dispara una acción de Redux 
 para buscar países por nombre.


*/









    // const onSearch = ()=>{
    //     dispatch(getCountryByName(name))
    //     setCurrentPage(1)

    // }

    // const handleSearch = () => {
    //     onSearch(name)
    // }

    // const handleClick = () =>{
    //     // if(namec){
    //         dispatch(getCountryByName(namec))
    //         // navigate(`/detail/${name}`)
    //         setNamec('')
    //     // }
    // }

    
            {/* <button className={styles["btn"]} onClick={onSearch}  >
                <span>    
                    SEARCH
                </span>
            </button> */}