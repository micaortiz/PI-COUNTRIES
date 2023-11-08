/* hooks */
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
/* components */
import LandingPage from './components/landing/LandingPage';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Nav from './components/nav/Nav';
import { getActivities, getAllCountries} from './redux/actions/actions';

import './App.css'

function App() {
  
  const dispatch = useDispatch()
  const location = useLocation(); 

  useEffect(() => {

    dispatch(getAllCountries())
    dispatch(getActivities()) // obtengo las actividades que ya estan creadas
  }, [dispatch])

  return (
    <div>
          {location.pathname !== "/" && location.pathname !== "/activities"  && 
          <Nav/>} 

      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path='/countries' element={<Home/>}/>
        <Route path='/activities' element={<Form/>}/>
        <Route path="/detail/:id" element={<Detail/>} />
        {/* :id -> es dinamico, es params  */}
      </Routes>
    </div>
  )
}

export default App











/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
 1. Routes contiene a todas las rutas
 2. Route es la ruta como tal y el atributo element indica que componente renderiza 
 3. Si la ruta es distinta de la landingPage y del form se renderiza el nav 
 4. Utilizando un useEfect para que haga un dispatch y al momento de que se monte 
 el componente se renderize se muestre todas las cards y las actividades creadas
  Y a la vez se vaya actualizando el componente 

*/
