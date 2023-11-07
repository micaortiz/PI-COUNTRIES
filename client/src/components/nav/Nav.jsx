import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import logo from "../../assets/turisTrip_2.png"
// import "./Nav.styles.css"
import styles from "./Nav.module.css";

const Nav = () => {
    // const Nav = ({onSearch}) => {
    return (
        <div className="search-box">
            {/* <p>Estoy en el Nav</p> */}
                <Link  to='/' className={styles['textCreate-logo']} >
                    <button className={styles['btn']}>

                    <span>Trip</span>touris</button>
                </Link> 


                
            <nav className={styles["container"]} >
                {/* <Link to='/'>
                    <img className={styles.logo} 
                    src={logo} alt="logo" 
                    />
                </Link> */}
                <Link  to='/countries' className={styles['textCreate']} >
                    <button className={styles['btn']}>HOME</button>
                </Link> 
                <Link  to='/activities' className={styles['textCreate']}>
                    <button className={styles['btn']}>ACTIVITY</button>
                </Link> 
                {/* <SearchBar onSearch={onSearch}/> */}
                {/* <input placeholder="Busqueda" />
                <button>Buscar</button> */}
            </nav>
        </div>
    );
}

export default Nav;