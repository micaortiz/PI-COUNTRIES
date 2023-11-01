import Cards from "../cards/Cards";
import Nav from "../nav/Nav";
import SearchBar from "../searchBar/SearchBar";
import "./Home.styles.css"


const Home = () => {
    return (
        <div className="home">
            <h2 className="home-title">Home</h2>
            
            {/* <Nav/> */}
            {/* verificar si dps el search esta bien o va dentro de nav  */}
            {/* <SearchBar/>  */}
            <Cards/> 
        </div>
    );
}

export default Home;