import { useContext } from 'react';
import { Context } from '../contexts/Context';


export const useSearchMessage = () => {

    const { state } = useContext(Context);
    let searchMessage = '';
    let placeholderMessage = '';

    if(state.language.name === 'pt') {

        searchMessage = 'Como está o tempo hoje?';
        placeholderMessage = 'Digite o nome da cidade'

    }else if(state.language.name === 'en') {

        searchMessage = "How's the weather today?";
        placeholderMessage = 'Enter a city name'

    }else if(state.language.name === 'es'){

        searchMessage = '¿Como está el tiempo hoy?';
        placeholderMessage= 'Introduzca el nombre de la ciudad';
    } 
 
    return { searchMessage, placeholderMessage}
}