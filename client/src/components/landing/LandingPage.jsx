import { Link } from "react-router-dom"
import styles from "./LandingPage.module.css"

const LandingPage = ()=>{
    
    return(
        <div className={styles.container}>

            <h1>EXPLORE THE WORLD</h1>

            <p> Explore the countries of the world and plan your tourist activities</p>

            <Link to='/countries'>
                <button className={styles.cta}>
                    <span>
                    Discover ➜
                    </span>
                    </button>
            </Link>

        </div>
    )
}
export default LandingPage