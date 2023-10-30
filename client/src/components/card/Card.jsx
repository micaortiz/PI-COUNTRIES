
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
// import { addFav, removeFav } from "../../redux/actions/actions";
// import { useState, useEffect } from "react";
import styles from './Card.module.css'
// import { useLocation } from "react-router-dom";
// import { getAllCountries } from "../../redux/actions/actions";

const Card = ({id, name, continents, flags}) => {
    // const dispatch = useDispatch()

    // const { allCountries } = useSelector((state) => state)

    // useEffect(() => {
    //     dispatch(getAllCountries());
    //   }, [dispatch]);

    return (
        <div className={styles.card}>
            {/* <Link to={`/detail/${id}`}> */}
                <img src={flags} alt={name} />
            {/* </Link> */}
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