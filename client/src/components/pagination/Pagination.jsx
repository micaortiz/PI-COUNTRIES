import styles from "./Pagination.module.css";

// es un componente que se encarga de renderizr una serie de botones dependiendo del num de pag que reciba
const Pagination = ({totalNumCountries, elementsPerPage, currentPage, setCurrentPage}) => {

    const pageNumber = []

    for(let i = 1 ; i<= Math.ceil(totalNumCountries/elementsPerPage); i++){
      // agrego la cantidad de paginas
      pageNumber.push(i)
    }

    // actualiza el estado de la pag actual
    const onPreviousPage = ()=>{
      setCurrentPage(currentPage - 1) 
    }

    const onNextPage = ()=>{
      setCurrentPage(currentPage + 1)
    }

    // para cambiar a una pag en especifico
    const onSpecificPage = (n)=>{
      setCurrentPage(n)
    }

    return (
      <div className={styles.pagination}>
        <div className={styles.paginationPages}>

        {/* renderizo los botones de paginacion */}

          <button className={styles.btnPage} onClick={onPreviousPage} disabled={currentPage === 1}> Previous </button>

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

          <button className={styles.btnPage} onClick={onNextPage} 
                  disabled={currentPage >= pageNumber.length}> Next </button>
        </div>
    </div>
  );
};

export default Pagination;


































/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
 1. PageNumber array que contendrá números de página
 2. onPreviousPage: Resta 1 al valor de la página actual (currentPage) cuando 
 se hace clic en el botón "Previous". Esto permite al usuario retroceder una página

 3. onNextPage: Suma 1 al valor de la página actual (currentPage) cuando se 
 hace clic en el botón "Next". Esto permite al usuario avanzar una página.

 4. onSpecificPage(n): Establece la página actual (currentPage) en un valor 
 específico n. Esto permite al usuario saltar a una página en particular

 5. El botón "Next" permite al usuario avanzar una página. Está desactivado 
 cuando la página actual es la última (cuando currentPage es mayor o igual al número total de páginas).

  ----------------------------------------
  Pagination crea una interfaz de paginación que permite al usuario navegar 
  entre diferentes páginas de un conjunto de elementos. Los botones 
  "Previous" y "Next" permiten retroceder y avanzar, y los botones numerados 
  permiten ir directamente a una página específica.



*/