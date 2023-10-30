import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer/reducer.js'
import thunkMiddleware from 'redux-thunk'


// config para que entienda que el navegador esta trabajando con redux
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// se utiliza para configurar las herramientas de desarrollo de Redux en el navegador. Permite utilizar la extensión Redux DevTools para depurar y visualizar el estado de la aplicación en el navegador.

// creacion del Store
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

// Middleware es el traductor entre el cliente y el server

export default store;