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
import { getAllCountries } from './redux/actions/actions';


function App() {
  const dispatch = useDispatch()

  // cuando se monta el componente por primera vez se despacha una action para obtener a todos los paises
  useEffect(() => {
    dispatch(getAllCountries())
  }, [])


  return (
    <div>
          {/* {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />} */}
      {/* <h1>Characters</h1> */}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        
        {/* <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        /> */}

        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/detail/:id" element={<Detail/>} />
        {/* <Route path="/favorites" element={<Favorites />} /> */}
        {/* :id -> es dinamico, es params  */}
        {/* <Route path='*' element={<Error/>} /> */}
      </Routes>
    </div>
  )
}

export default App
