import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer/reducer.js'
import thunkMiddleware from 'redux-thunk'


// config para que entienda que el navegador esta trabajando con redux
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);


export default store;

























/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */
/* 
 ThunkMiddleware: es el traductor entre el cliente y el server. Y permite 
 hacer peticiones al servidor/api.
 
 La info viaja en formato JSON y yo tabajo con JS entonces thunk es quien se encarga 
 de traducirlo 

 composeEnhancer:  Se utiliza para configurar las herramientas de desarrollo de 
 Redux en el navegador. Permite utilizar la extensión Redux DevTools 
 para depurar y visualizar el estado de la aplicación en el navegador.



*/
























