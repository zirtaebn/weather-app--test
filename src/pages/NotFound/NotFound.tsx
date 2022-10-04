import './NotFound.css';

import { useLanguageString } from '../../hooks/useLanguageString';
import { Context } from '../../contexts/Context';

import { useContext } from 'react';

export const NotFound = () => {

    const { state } = useContext(Context);

    const { notFoundPageMessage } = useLanguageString(state);
   
    return(

        <div className='not-found'>
            <h1>404</h1>
            <h2>{ notFoundPageMessage }</h2>
        </div>
    )
}