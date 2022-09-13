import { useContext } from 'react';
import { Context } from '../contexts/Context';


export const useWeatherDataMessage = () => {

    const { state } = useContext(Context);
    let weatherDataMessage = '';

    if(state.language.name === 'pt') {

        weatherDataMessage = 'Ver previsão para os próximos 5 dias';
      
    }else if(state.language.name === 'en') {

        weatherDataMessage = 'See forecast for the next 5 days';
      
    }else if(state.language.name === 'es'){

        weatherDataMessage = 'Ver previsión para los próximos 5 días';
    }

    return weatherDataMessage

}