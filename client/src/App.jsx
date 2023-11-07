import './App.css'
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
import { getActivities, getAllCountries, getCountryByName } from './redux/actions/actions';


function App() {
  const dispatch = useDispatch()
  const location = useLocation(); // retorna un objeto, puedi hacer destructuring
  // const country = useSelector((state)=> state.countryCopy)

  // cuando se monta el componente por primera vez se despacha una action para obtener a todos los paises
  useEffect(() => {
    // dispatch(clean())
    dispatch(getAllCountries())
    dispatch(getActivities()) // obtengo las actividades que ya estan creadas
  }, [dispatch])
// }, [dispatch])

//   useEffect(() => {
//     if (!countriesCopy.length) {
//         dispatch(getAllCountries())
//         window.scrollTo(0, 0);
//     }
//     dispatch(getAllActivities())
// }, [])


  const onSearch = async(name) => {
    try{
      dispatch(getCountryByName(name))
    } catch{
      throw Error(error.message);
    }
  }
  return (
    <div>
          {/* {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />} */}
          {location.pathname !== "/" && 
          <Nav onSearch={onSearch}/>} 
      {/* <h1>Characters</h1> */}
      {}
      {/* <Nav/> */}

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
