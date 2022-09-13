import { useContext } from 'react';
import { Context } from '../contexts/Context';


export const useNextDaysDataMessage = () => {

    const { state } = useContext(Context);
    let nextDaysDataMessage = '';

    if(state.language.name === 'pt') {

        nextDaysDataMessage = 'Previsão para 5 dias';
       
    }else if(state.language.name === 'en') {

        nextDaysDataMessage = 'Forecast for 5 days';

    }else if(state.language.name === 'es'){

        nextDaysDataMessage = 'Previsión para 5 días';

    }

    return nextDaysDataMessage
}