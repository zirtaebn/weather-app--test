import './NotFound.css';

import { useLanguageString } from '../../hooks/useLanguageString';
import { IntlContext } from '../../contexts/IntlContext';
import { Footer } from '../../components/Footer/Footer';

import { useContext } from 'react';

export const NotFound = () => {

    const { state } = useContext(IntlContext);

    const { notFoundPageMessage } = useLanguageString(state);
   
    return(

        <>
            <div className='not-found'>
                <h1>404</h1>
                <h2>{ notFoundPageMessage }</h2>
            </div>
            <Footer />
        </>
    )
}