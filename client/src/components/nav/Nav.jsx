import "./nav.styles.css"

const Nav = () => {
    return (
        <div className="search-box">
            {/* <p>Estoy en el Nav</p> */}
            <form >
                <input placeholder="Busqueda" />
                <button>Buscar</button>
            </form>
        </div>
    );
}

export default Nav;