import { useState } from 'react';
import Card from '../card/Card'
import Pagination from '../pagination/Pagination';
import styles from './Cards.module.css'


const Cards = ({allCountries, currentPage, setCurrentPage}) => {

    if (!allCountries || !Array.isArray(allCountries)) {
        return <div>Countries not found</div>;
    }

    // total de elementos a renderizar por pag
    const elementsPerPage = 10

    // countries por pagina (10)
    const [countriesPerPage,setCountriesPerPage] = useState(10)
  
    // cant total de paises
    const totalNumCountries = allCountries.length

    // definicion de indices
    const lastIndex = currentPage * countriesPerPage
    const firstIndex = lastIndex - countriesPerPage 
    


    return (
        <div>
     
            {/* // renderiza a cada Card */}
            <div className={styles.container}>
                {
                    
                    allCountries?.map(({id, name, flags, continents, capital, subregion, area, population }) => {
                        return <Card
                            key = {id}
                            id = {id}
                            name = {name}
                            flags = {flags}
                            continents={continents}
                            capital = {capital}
                            subregion = {subregion}
                            area = {area}
                            population = {population}
                            />
                        }).slice(firstIndex,lastIndex)
                    }
            </div>
            <Pagination 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                elementsPerPage={elementsPerPage}
                totalNumCountries={totalNumCountries}
            />
        </div>
    );
}

export default Cards;


















/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
 1. Renderiza una lista de componentes Card
 2. Se utiliza el metodo map() para recorrer cada objeto de pais en el arreglo
 3. Para cada objeto pais se retorna un componente Card y se le pasan las 
 propiedades correspondientes como key, id, name, flags, continents, capital, 
 subregion, area, y population. Estas propiedades se utilizan para personalizar 
 cada tarjeta de país con la información específica del país.  
 4. Se aplica el metodo slice para mostrar solo un subconjunto de las card

    ------------------------------------------
 PAGINATION:
 1. Se verifica que allCountries sea una matriz valida 
 2. Se utiliza el estado local countriesPerPage para rastrear la cantidad de 
 países por página, que se establece inicialmente en 10.
 3. Se definen los índices firstIndex y lastIndex para determinar 
 cuáles países se mostrarán en la página actual.
 
 >> CARDS renderiza al componente PAGINATION 








*/