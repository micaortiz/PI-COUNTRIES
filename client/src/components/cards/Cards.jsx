import Card from '../card/Card'
import { useSelector } from 'react-redux';
import styles from './Cards.module.css'
import Pagination from './pagination/Pagination';
import { useState } from 'react';


const Cards = () => {
    const  allCountries  = useSelector((state) => state.allCountries)

    // total de elementos a renderizar por pag
    const elementsPerPage = 10

    // countries por pagina (10)
    const [countriesPerPage,setCountriesPerPage] = useState(10)
    
    // pagina actual -> al momento que se carguen sea la pag uno
    const [currentPage, setCurrentPage] = useState(1) // empieza a partir de uno

    // console.log(allCountries);
    // const numCountries = allCountries ? allCountries.length : 0;
    // console.log(numCountries);

    // cant total de paises
    const totalNumCountries = allCountries.length
    // console.log(totalNumCountries);
    
    // .slice(0,5) -> retorna un arreglo con 5 posiciciones

    // definicion de indices
                        //1           // 6 
    const lastIndex = currentPage * countriesPerPage // = 6
    const firstIndex = lastIndex - countriesPerPage // = 0
                         // 6        // 6
    


    return (
        <div>
            {/* <Pagination 

                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
   
                elementsPerPage={elementsPerPage}
                totalNumCountries={totalNumCountries}
            /> */}

            {/* // renderiza a cada Card */}
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
                        }).slice(firstIndex,lastIndex)
                        // .slice(0,10) regresa los primeros 10 elementos en un nuevo arreglo
                    }
            </div>
            <Pagination 
                                // countriesPerPage={countriesPerPage} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                                // setCountriesPerPage={setCountriesPerPage} 
                elementsPerPage={elementsPerPage}
                totalNumCountries={totalNumCountries}
            />
        </div>
    );
}

export default Cards;