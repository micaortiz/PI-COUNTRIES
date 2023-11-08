import validation from './validationForm'
import { useState, useEffect } from "react"
import { useSelector, useDispatch} from 'react-redux';
import { Link, useNavigate} from 'react-router-dom'
// import { useHistory } from 'react-router'
import { postActivity } from '../../redux/actions/actions'
import styles from './Form.module.css'
import stylesInputs from '../styles/Input.module.css'
import stylesNav from "../nav/Nav.module.css"
// import '../nav/Nav.styles.css'


const initialForm ={        
    name: '',
    difficulty: '',
    duration: '',
    season:'',
    countries:[] // almacena el id
}

const Form = () => {    
    // const navigate = useNavigate()
    const dispatch = useDispatch()
 
    // estado local
    const [activityData, setActivityData] = useState( initialForm )
    const [selectCountries, setSelectCountries] = useState([])
    const [errors, setErrors] = useState({})


    // estado global
    const allCountries = useSelector((state)=> state.allCountries)


    // Maneja cambios en el input
    const handleInputName = (event)=>{
        setActivityData({
            ...activityData,
            // Sobrescribe la prop 'name' con el valor ingresado en el input
            [event.target.name]: event.target.value
        })
    }

    const handleSelectDifficulty = (event)=>{
        setActivityData({

            ...activityData,
            difficulty: event.target.value
        })
    }

    const handleInputDuration = (event)=>{
        setActivityData({
  
            ...activityData,  
            duration: event.target.value
        })
    }

    const handleSelectSeason = (event)=>{
        setActivityData({
           
            ...activityData,
            season: event.target.value
        })
    }
   
    const handleSelectCountries = (event) =>{
        const countryExists = selectCountries.find((country)=> country.id === event.target.value)

        if(countryExists){
            return alert('Country already selected')
        }
        
        // si el pais no esta seleccionado
        setActivityData({
            ...activityData,
            countries: [...activityData.countries, event.target.value ]
        })

        // busco info adicional de la copia que almacena los datos originales
        const {id, name, flags} = allCountries.find((ctry)=> ctry.id == event.target.value)

        // Agrega el país seleccionado a la lista de 'selectCountries'.
        setSelectCountries([...selectCountries, { id, name, flags }]);
    }


    const handlePostActivity = (event) => {
        event.preventDefault()

        dispatch(postActivity(activityData))
                            
        alert('¡Activity has been created successfully!')
        window.location.href = '/countries'
    }

    useEffect(()=>{
        
        // para que no muestre los errores al comienzo y se hace la validacion cada vez que se actualiza el estado
        if(activityData.name!==''|| activityData.difficulty!=='' || activityData.duration!== '' || 
        activityData.season!=='' || !activityData.countries ){

            setErrors(validation(activityData));
        }

    },[activityData])

    

      // Función para manejar la eliminación de un país seleccionado
    const handleDeleteCountries = (id) => {
      
        const updatedSelectCountries = selectCountries.filter((country) => country.id !== id);
        setSelectCountries(updatedSelectCountries);

        const newCountries = updatedSelectCountries?.map((country) => country.id);
        setActivityData({
        ...activityData,
        countries: newCountries,
        });

    };

    const handleResetForm = () => {
        setActivityData(initialForm);
        setSelectCountries([]); 
      };
    
    return (
        <div className={styles.container}>

        <div className={styles["form-container"]}>

            <Link  to='/countries' className={styles['textCreate']} >
                <button  className={styles['btn']}>BACK</button>
            </Link> 
        
        <form 
            className={styles["inputs-form"]}
            onSubmit={handlePostActivity} 
            onReset={handleResetForm}>


            <h2 className={styles['title-form']} >Create a new Activity</h2>

            {/* ----- ACTIVITY ----- */}

            <label htmlFor="name" className={stylesInputs["label-form"]}>Activity </label>
            <input 
                    className={stylesInputs["input-form"]}
                    type="name" 
                    name="name" 
                    placeholder="Enter activity name..."
                    onChange={handleInputName} 
            />
            {errors.name !== '' && <p className={styles["error-form"]}>{errors.name}</p>}

            {/* ----- DIFFICULTY ----- */}
    
            <div className={stylesInputs["input-container"]}>
                <label className={stylesInputs["label-form"]}>Difficulty </label>
                <select className={stylesInputs["input-form"]} onChange={handleSelectDifficulty} placeholder="Select Difficulty">
                    <option value="0">Select an option...</option>
                    <option value="1">Beginner</option>
                    <option value="2">Amateur</option>
                    <option value="3">Normal</option>
                    <option value="4">Professional</option>
                    <option value="5">Expert</option>
                </select>
           </div>

            {errors.difficulty !== '' && <p  className={styles["error-form"]}>{errors.difficulty}</p>}
            
            {/* ----- DURATION ----- */}

           <div className={stylesInputs["input-container"]}>
            
                <label className={stylesInputs["label-form"]}>Duration </label>
                <input 
                        className={stylesInputs["input-form"]}
                        type="number" 
                        name="duration" 
                        placeholder="Enter duration in hours..."
                        onChange={handleInputDuration}
                        step={1}
                        min={0} 
                        // max={12}
                />
           </div>

            {errors.duration !== '' && <p  className={styles["error-form"]}>{errors.duration}</p>}

            {/* ----- SEASON ----- */}
            
            <div className={stylesInputs["input-container"]}>
            <label className={stylesInputs["label-form"]}>Season </label>
            <select  className={stylesInputs["input-form"]} onChange={handleSelectSeason} placeholder="Select Season">
                <option value="Season">Select an option...</option>
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
            </select>
            </div>

            {errors.season !== '' && <p  className={styles["error-form"]}>{errors.season}</p>}
    
            {/* ----- COUNTRY ----- */}
        
            <div className={stylesInputs["input-container"]}> 

                <label className={stylesInputs["label-form"]}>Country </label>

                <select 
                className={stylesInputs["input-form"]}
                onChange={handleSelectCountries} 
                > 
                    <option value="">Select countries...</option>
                    {
                            allCountries?.map((ctry)=>(

                                <option
                                    id={ctry.id}
                                    value={ctry.id} 
                                    key={ctry.id} 
                                    name={ctry.name} > {ctry.name} </option>

                                ))
                            

                    }
                
                </select>
            </div>
            {errors.countries !== '' && <p className={styles["error-form"]}>{errors.countries}</p>}

          

            {/* ----- Muestro los paises seleccionados-- */}

            {selectCountries?.map(({ id, name, flags }) => {
                    return (
                        <div key={id} className={styles["container-bandera"]} >
                             <button onClick={() => handleDeleteCountries(id)}>X</button>

                                <img  className={styles.bandera} src={flags} alt={name} />

                        </div>
                    )
                })}

            <div  className={styles["btns-form"]} >
                <button className={styles["button-secondary-dark"]} type='reset'>RESET</button>
               
                <button 
                    className={styles["button-primary-dark"]}
                    type="submit" 
                    // si los campos estan vacios el btn se desactiva
                    disabled={!activityData.name|| !activityData.difficulty || !activityData.duration || !activityData.season || activityData.countries.length === 0}>

                    CREATE

                </button>
                
            </div>
        </form>
        </div>
        </div>
    );
}

export default Form














/* ----------------------------------------------------------------------- */
/* -------------------- NOTAS --------------------  */

/* 
 1. Defino el estado inicial de mi form 
 2. Se definen varias funciones para manejar cambios en los campos del form
    2.1 handleInputName, handleSelectDifficulty, handleInputDuration, y 
    handleSelectSeason actualizan el estado local activityData con los valores 
    ingresados por el usuario en los campos del formulario.

    2.2 handleSelectCountries: maneja la seleccion de paises. Actualiza 
    activityData con el ID del país seleccionado y agrega información 
    adicional del país a la lista. Y agrega el país seleccionado a la lista 
    de 'selectCountries'

    2.3 handlePostActivity maneja el envío del formulario. Si no hay errores
    en la validacion se utiliza el dispatch para crear el formulario y redirecciona
    al usuario al home 

    2.4 useEffect Los errores se almacenan en el estado errors, lo que permite 
    mostrar mensajes de error al usuario si es necesario.

    2.5 handleResetForm se utiliza para restablecer los campos del formulario y 
    borrar la lista de países seleccionados cuando sea necesario.

    2.6 handleDeleteCountries permite eliminar un país de la lista de países 
    seleccionados. Filtra los países seleccionados para excluir el que tiene el ID dado
    Actualiza el estado 'activityData' con la nueva lista de IDs de países

    Filtra la lista de selectCountries y actualiza activityData 
    con los nuevos ID de países seleccionados.
    
 3. () => handleDeleteCountries(id) es una función anónima que se ejecutará 
 cuando se produzca un clic en el botón. Esta función toma el ID del país (id) 
 como argumento y lo pasa como parámetro a handleDeleteCountries.



 Sobrescribe la prop 'name' con el valor ingresado en el input
 [event.target.name]: event.target.value




*/










