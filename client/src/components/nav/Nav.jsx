import { Link } from "react-router-dom";
import "./nav.styles.css"
import SearchBar from "../searchBar/SearchBar";

const Nav = ({onSearch}) => {
    return (
        <div className="search-box">
            {/* <p>Estoy en el Nav</p> */}
            <nav >
                <Link  to='/countries'>
                    <button className="nav-button">HOME</button>
                </Link> 
                <Link  to='/activities'>
                    <button className="nav-button">ACTIVITY</button>
                </Link> 
                <SearchBar onSearch={onSearch}/>
                {/* <input placeholder="Busqueda" />
                <button>Buscar</button> */}
            </nav>
        </div>
    );
}

export default Nav;