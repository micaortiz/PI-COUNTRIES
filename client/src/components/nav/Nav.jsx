import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

const Nav = () => {

    return (
        <div className="search-box">

                <Link  to='/' className={styles['textCreate-logo']} >
                    <button className={styles['btn']}>

                    <span>Trip</span>touris</button>
                </Link> 
  
            <nav className={styles["container"]} >

                <Link  to='/countries' className={styles['textCreate']} >
                    <button className={styles['btn']}>HOME</button>
                </Link> 
                <Link  to='/activities' className={styles['textCreate']}>
                    <button className={styles['btn']}>ACTIVITY</button>
                </Link> 

            </nav>
        </div>
    );
}

export default Nav;