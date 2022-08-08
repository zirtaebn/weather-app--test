import './styles.css';

import Autocomplete from "react-google-autocomplete";

import { Context } from '../../contexts/Context';

import { useContext } from 'react';

export const Search = () => {

    const { state } = useContext(Context);

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
                    
                    console.log(place.geometry.location.lat(), 'lat');
                    console.log(place.geometry.location.lng(), 'long');
                }}
                language = { state.language.name }
                placeholder={ placeholder } 
                
            />

        </div>

    )
}

