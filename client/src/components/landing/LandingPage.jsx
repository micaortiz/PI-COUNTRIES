import { Link } from "react-router-dom"
import styles from "./LandingPage.module.css"

const LandingPage = ()=>{
    
    return(
        <div className={styles['container-landing']}>
            <div className={styles['container']}>

            <h1 className={styles['title']}>EXPLORE THE WORLD</h1>

            <h4 className={styles['sub-title']}> Explore the countries of the world and plan your tourist activities</h4>

            <Link to='/countries'>
                <button className={styles.cta}>
                    <span>
                    Discover ➜
                    </span>
                    </button>
            </Link>
            </div>

        </div>
    )
}
export default LandingPage