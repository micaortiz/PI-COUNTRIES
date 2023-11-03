import validation from './validationForm'
import { useState, useEffect } from "react"
import { useSelector, useDispatch} from 'react-redux';
import { NavLink, useNavigate} from 'react-router-dom'
// import { useHistory } from 'react-router'
import { postActivity } from '../../redux/actions/actions'
import styles from './Form.module.css'

const Form = () => {    
    const initialForm ={        
        name: '',
        difficulty: '',
        duration: '',
        season:'',
        countries:[] // almacena el id
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // let history = useHistory()
    // estado local
    const [activityData, setActivityData] = useState( 
        initialForm
        // {
        // name: '',
        // difficulty: '',
        // duration: '',
        // season:'',
        // countries:[] // almacena el id
    // }
    )
    const [selectCountries, setSelectCountries] = useState([])

    // estado global
    const country = useSelector((state)=> state.countryCopy)

    const [errors, setErrors] = useState({})

    // Maneja cambios en el input
    const handleInputName = (event)=>{
        setActivityData({
            // copia del estado para no perder las props
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

    // agregar paises 
    const handleSelectCountries = (event) =>{
        // si el pais ya esta seleccionado
        const countryExists = selectCountries.find((country)=> country.id === event.target.value)
        if(countryExists){
            alert('Country already selected')
        }
        
        // si el pais no esta seleccionado
        setActivityData({
            ...activityData,
            countries: [...activityData.countries, event.target.value ]
        })

        // busco info adicional de la copia que almacena los datos originales
        const {id, name, flags} = country.find((ctry)=> ctry.id == event.target.value)

        // Agrega el país seleccionado a la lista de 'selectCountries'.
        setSelectCountries([...selectCountries, { id, name, flags }]);
    }


    //? NO FUNCIONA 
    const handleDeleteCountries = (id) => {
        const countryToDelete = selectCountries.find((country) => country.id === id);
        
        if (countryToDelete) {
            // Realiza la acción que deseas con el país que se va a eliminar.
            // En este caso, simplemente muestra una alerta.
            alert(`Se ha quitado ${countryToDelete.name}`);
            
            // Filtra la lista de países seleccionados 'selectCountries' para excluir el país con el ID proporcionado.
            const updatedSelectCountries = selectCountries.filter((country) => country.id !== id);
    
            // Actualiza el estado 'selectCountries' con la nueva lista de países seleccionados.
            setSelectCountries(updatedSelectCountries);
    
            // Crea una nueva lista de IDs de países basada en la lista actualizada de 'selectCountries'.
            const newCountries = updatedSelectCountries.map((country) => country.id);
    
            // Actualiza el estado 'activityData' con los nuevos IDs de países seleccionados.
            setActivityData({
                ...activityData,
                countries: newCountries
            });
        }
    }

    //? NO FUNCIONA
    const handleDelete = (selectCountries) => {

        const updatedCountries = activityData.countries.filter(country => country !== selectCountries);
        setActivityData({
            ...activityData,
            countries: updatedCountries,
        });

        
    }
    
    
    const handlePostActivity = (event) => {
        event.preventDefault()
        dispatch(postActivity(activityData))
        // setActivityData(
        //     initialForm
        //     // {
        //     // name: '',
        //     // difficulty: '',
        //     // duration: '',
        //     // season: '',
        //     // countries: []
        //     // }
        // )
        // setSelectCountries([])
        // window.location.reload();
        // resetForm()
        // Para volver a la pantalla principal
        // history.push('/home')
        // Reseteamos el input

        setActivityData(
            initialForm
            // {
            // name: '',
            // difficulty: '',
            // duration: '',
            // season: '',
            // countries: []
            // }
            )

            window.alert('¡Se creo la actividad con éxito!')

             window.location.reload()
        // navigate("/activities")
    }
    

    useEffect(()=>{
        // para que no muestre los errores al comienzo
        if(activityData.name!==''|| activityData.difficulty!=='' || activityData.duration!== '' || activityData.season!=='' || !activityData.countries ){

            // se hace la validacion cada vez que se actualiza el estado 
            setErrors(validation(activityData));
        }

    },[activityData])

    
    // para que no recargue la pag cuando se de click en el button
    // const handleSubmit = (event) =>{
    //     event.preventDefault();
    //     // login(userData);
    // }


    const handleResetForm = () => {
        setActivityData(initialForm); // Restablece los campos de entrada
        setSelectCountries([]); // Borra los países seleccionados
      };
    
    return (
        <form onSubmit={handlePostActivity} onReset={handleResetForm}>
            <h2>Create a new Activity</h2>

            <label htmlFor="name" >Activity </label>
            <input 
                    type="name" 
                    name="name" 
                    placeholder="Enter activity name..."
                    // value={userData.email} 
                    onChange={handleInputName} 
            />
            {errors.name !== '' && <p  className='error-message'>{errors.name}</p>}
            <br />

            <label>Difficulty </label>
            <select onChange={handleSelectDifficulty} placeholder="Select Difficulty">
                <option value="0">Select an option...</option>
                <option value="1">Very Easy</option>
                <option value="2">Easy</option>
                <option value="3">Moderate</option>
                <option value="4">Difficult</option>
                <option value="5">Very Difficult</option>
            </select>
            {errors.difficulty !== '' && <p  className='error-message'>{errors.difficulty}</p>}
            <br />
           
            <label>Duration </label>
            <input 
                    type="number" 
                    name="duration" 
                    placeholder="Enter duration in hours..."
                    // value={userData.email} 
                    onChange={handleInputDuration}
                    step={1}
                    min={0} 
                    // max={12}
            />
            {errors.duration !== '' && <p  className='error-message'>{errors.duration}</p>}

            <br />

            <label>Season </label>
            <select onChange={handleSelectSeason} placeholder="Select Season">
                <option value="Season">Select an option...</option>
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
            </select>
            {errors.season !== '' && <p  className='error-message'>{errors.season}</p>}
    
            <br />

            <label>Country </label>

            <select onChange={handleSelectCountries}>
                <option value="">Select countries...</option>
                {
                    country.map((ctry)=>{
                        return(

                            <option value={ctry.id} key={ctry.id} name='country' >{ctry.name}</option>
                            )
                        }
                        
                    )
                }
            
            </select> 
            {errors.countries !== '' && <p  className='error-message'>{errors.countries}</p>}

            <br />

            {/* muestro los paises seleccionados */}

            {/* <p>Selected countries</p> */}
            {selectCountries?.map(({ id, name, flags }) => {
                    return (
                        <div key={id} >
                            {/* <button ><img onClick={() => handleDeleteCountries(id)}title='delete' />X</button> */}
                            {/* <NavLink  to={`/countries/${id}`}> */}
                                {/* <button onClick={()=> handleDelete(id)}>X</button> */}
                                <img  src={flags} alt={name} />
                                {/* <h2 >{name}</h2> */}
                            {/* </NavLink> */}
                        </div>
                    )
                })}

            <div >
                <button type='reset'>RESET</button>
                <button 
                    type="submit" 
                    disabled={errors.name || errors.difficulty || errors.season || errors.countries} 
                    // onClick={() => window.location.reload()}
                >
                        {/* || errors.countries */}
                        CREATE
                </button>
            </div>
        </form>
    );
}

export default Form