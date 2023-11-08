import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import store from './redux/store/store.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // indica que vamos a utilizar rutas en app 
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </Provider>
)


























/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
  <Provider store={store}> envuelve toda la aplicación dentro de un componente 
  React Redux Provider. El store prop se pasa al Provider, lo que hace que el 
  almacén Redux esté disponible para todos los componentes anidados.

*/

