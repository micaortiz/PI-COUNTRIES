import { Link } from "react-router-dom";

import styles from './Card.module.css'

const Card = ({id, name, continents, flags}) => {

    return (
        <div className={styles.card}>
       
            <img src={flags} alt={name} />

            <div className={styles.cardContent}>

            <h2 className={styles.cardTitle}>{name}</h2>
            <p>Continent: {continents}</p>

            <Link to={`/detail/${id}`}>
                <button>Read More</button>
            </Link>

            </div>
        </div>
    );
}

export default Card;






/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */