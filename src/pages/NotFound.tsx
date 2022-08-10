import '../css/NotFound.css';

import { useContext} from 'react';
import { Context } from '../contexts/Context';



export const NotFound = () => {

    const { state } = useContext(Context);
    let phrase:string = '';

    if(state.language.name === 'pt') {

        phrase = 'Página não encontrada';

    }else if(state.language.name === 'en') {

        phrase = 'Page not found';

    }else if(state.language.name === 'es') {

        phrase = 'Página no encontrada'
    }

    return(

        <div className='not-found'>
            <h1>404</h1>
            <h2>{phrase}</h2>
        </div>
    )
}