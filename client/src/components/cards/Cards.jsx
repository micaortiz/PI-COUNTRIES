import Card from '../card/Card'
import { useSelector } from 'react-redux';
import styles from './Cards.module.css'


const Cards = () => {
    const  allCountries  = useSelector((state) => state.allCountries)
    return (
        // renderiza a cada Card
        <div className={styles.container}>
            {
            
                allCountries?.map(({id, name, flags, continents, capital, subregion, area, population }) => {
                    return <Card
                        key = {id}
                        id = {id}
                        name = {name}
                        // name = {name?.common}
                        flags = {flags}
                        // flags = {flags?.png}
                        continents={continents}
                        capital = {capital}
                        subregion = {subregion}
                        area = {area}
                        population = {population}
                    />
                })
            }
        </div>
    );
}

export default Cards;