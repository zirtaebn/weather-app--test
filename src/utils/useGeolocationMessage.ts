import { useContext } from 'react';
import { Context } from '../contexts/Context';


export const useGeolocationMessage = () => {

    const { state } = useContext(Context);
    let geolocationMessage = '';

    if(state.language.name === 'pt') {

        geolocationMessage = 'Ver previsão de onde você está';

    }else if(state.language.name === 'en') {

        geolocationMessage = 'See forecast from where you are';
        
    }else if(state.language.name === 'es'){

        geolocationMessage = 'Ver previsión desde donde estás';
    }

    return geolocationMessage

}