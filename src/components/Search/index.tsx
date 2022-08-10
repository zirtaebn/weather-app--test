import '../../css/Search.css';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../contexts/Context';
import Autocomplete from "react-google-autocomplete";



export const Search = () => {

    const { state, dispatch } = useContext(Context);
    const navigate = useNavigate();
    let phrase: string = '';
    let placeholder:string = '';
    

    if(state.language.name === 'pt') {

        phrase = 'Como está o tempo hoje?';
        placeholder = 'Digite o nome da cidade'

    }else if(state.language.name === 'en') {

        phrase = "How's the weather today?";
        placeholder = 'Enter a city name'

    }else if(state.language.name === 'es'){

        phrase = '¿Como está el tiempo hoy?';
        placeholder= 'Introduzca el nombre de la ciudad';
    } 
 
    return(

        <div className='search-input'>
            <h1>{ phrase }</h1>

            <Autocomplete
                apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                onPlaceSelected={(place) => {

                    dispatch({

                        type: 'CHANGE_ADRESS',
                        payload: {
                
                            lat: place.geometry?.location?.lat(), 
                            lng: place.geometry?.location?.lng(),
                        }
                    })

                    navigate('/weather');
                }}
                language = { state.language.name }
                placeholder={ placeholder } 
                
            />
        </div>

    )
}

