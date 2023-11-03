import styles from "./Pagination.module.css";

// es un componente que se encarga de renderizr una serie de botones dependiendo del num de pag que reciba
const Pagination = ({totalNumCountries, elementsPerPage, currentPage, setCurrentPage}) => {

    // countries por pagina
    const pageNumber = [] // contiene todos los numeros por pag

    // console.log(totalCountries/countriesPerPage);
    

    for(let i = 1 ; i<= Math.ceil(totalNumCountries/elementsPerPage); i++){
      // i=1 para que la pag empieze desde 1 
      // agrego la cantidad de paginas
      pageNumber.push(i)
    }

    // actualiza el estado de la pag actual
    const onPreviousPage = ()=>{
      setCurrentPage(currentPage - 1) // mi nuevo estado de pagina actual va a ser el rta de pag actual menos uno
    }

    const onNextPage = ()=>{
      setCurrentPage(currentPage + 1) // mi nuevo estado de pagina actual va a ser el rta de pag actual menos uno
    }

    // para cambiar a una pag en especifico
    const onSpecificPage = (n)=>{
      // n se actualiza directamente en el current page
      setCurrentPage(n)
    }

    return (
      <div className={styles.pagination}>
      <div className={styles.paginationPages}>


      <button className={styles.btnPage} onClick={onPreviousPage} disabled={currentPage === 1}> Previous </button>
      {/* desactivar botones cuando no hay mas datos */}

        {/* renderizo los botones de paginacion */}
        {
          pageNumber.map((numPage)=>(
          <button 
              key={numPage} 
              className={currentPage === numPage ? `${styles.active} ${styles.btnPage}` : `${styles.btnPage}` }
              onClick={()=> onSpecificPage(numPage)} >
            {numPage}
          </button>

          ))
        }

      <button className={styles.btnPage} onClick={onNextPage} disabled={currentPage >= pageNumber.length}> Next </button>
      </div>
    </div>
  );
};

export default Pagination;
