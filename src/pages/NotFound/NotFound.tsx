import './NotFound.css';

import { useLanguageString } from '../../utils/useLanguageString';

export const NotFound = () => {

    const { notFoundPageMessage } = useLanguageString();
   
    return(

        <div className='not-found'>
            <h1>404</h1>
            <h2>{ notFoundPageMessage }</h2>
        </div>
    )
}