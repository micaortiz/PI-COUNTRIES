import { Link } from "react-router-dom"


const LandingPage = ()=>{
    
    return(
        <div>

            <h1>EXPLORE THE WORLD</h1>

            <p> Explore the countries of the world and plan your tourist activities</p>

            <Link to='/home'>
                <button>Discover</button>
            </Link>

        </div>
    )
}
export default LandingPage