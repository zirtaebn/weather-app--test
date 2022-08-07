import './styles.css';


import { Context } from '../../contexts/Context';

import { useContext } from 'react';

export const Search = () => {

    const { state } = useContext(Context);

    let phrase: string = 'Como está o tempo hoje?';
    let placeholder:string = 'Digite o nome da cidade';

    if(state.language.name === 'pt') {

        phrase = 'Como está o tempo hoje?';
        placeholder = 'Digite o nome da cidade'

    }else if(state.language.name === 'en') {

        phrase = "How's the weather today?";
        placeholder = 'Search the city name'

    }else {

        phrase = '¿Como está el tiempo hoy?';
        placeholder= 'Introduzca el nombre de la ciudad';
    }

    return(

        <div className='search-input'>
            <h1>{phrase}</h1>
            
            <input type='text' placeholder={placeholder} autoFocus/>
        </div>

    )
}