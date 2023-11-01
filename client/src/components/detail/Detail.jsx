// import React from 'react';
// import axios from "axios"
import { useParams } from "react-router-dom"
import {  useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getCountryById,cleanDetailCountry } from "../../redux/actions/actions"

import styles from './Detail.module.css'


// const URL_BASE = 'http://localhost:3001/countries'

const Detail = () => {
    // obtiene el id del personaje que se indica en la ruta de app
    const {id} = useParams()
    const countryDetail = useSelector((state) => state.countryDetail)
    const activityCountry = useSelector((state)=>state.activityCountry)
    const dispatch = useDispatch();
    
    useEffect(()=>{
        
        dispatch(getCountryById(id))
        // se desmonta y se limpia el estado
        return () => dispatch(cleanDetailCountry())    
    },[])

    useEffect(()=>{

    },[activityCountry])

    return (
        <div>
            
            <h1 className={styles.titleDetail}>Country Information</h1>

            <div className={styles.container}>
                <div className={styles.box}>

                {/* <div className={styles.flag}> */}

                    <div className={styles.title}>

                        <h2>{countryDetail.name} - {countryDetail.id} </h2>
                    </div>

                    <img src={countryDetail.flags} alt={countryDetail.name} />
                {/* </div> */}
            {/* <h3>ID: {countryDetail.id}</h3> */}
                    
                    <div className={styles.info}>

                        <h3>Continent: {countryDetail.continents}</h3>
                        <h3>Capital: {countryDetail.capital}</h3>
                        <h3>Subregion: {countryDetail?.subregion}</h3>
                        <h3>
                        Area: {countryDetail?.area} Km<sup>2</sup>
                        </h3>
                        <h3>Populations: {countryDetail.population}</h3>
                    </div>
                </div>
            </div>
                    <h2>Activities that can be performed</h2>
            {/* <p>Estoy en el detail</p> */}
        </div>
    );
}

export default Detail;