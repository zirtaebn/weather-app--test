import { useContext } from 'react';
import { Context } from '../contexts/Context';

export const useErrorMessage = () => {

    const { state } = useContext(Context);
    let error:string = '';
    let subError:string = '';

    if(state.language.name === 'pt') {

       
        error = 'Houve um erro!';
        subError = 'Verifique a conexão.';

    }else if(state.language.name === 'en') {

       
        error = "There's been an error!";
        subError = 'Check your connection.';

    }else if(state.language.name === 'es'){

        
        error = '¡Ha habido un error!';
        subError = ' Comprueba tu conexión.';
    }


    return { error, subError }

}