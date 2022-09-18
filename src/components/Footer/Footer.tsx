import './Footer.css';

import { Context } from '../../contexts/Context';
import { usePersistedData } from '../../hooks/usePersistedData';
import { useLanguageString } from '../../hooks/useLanguageString';

import { useContext, useEffect } from 'react';

export const Footer = () => {

    const { state, dispatch } = useContext(Context);
    const { footerMessage } = useLanguageString();
    const persistedData = usePersistedData('language',  state.language.name);
    
    useEffect(() => {
        
        dispatch({

            type: 'CHANGE_LANGUAGE',
            payload: {

                name: persistedData 
            }
        })
        // eslint-disable-next-line
    },[]);


    const handleChangeLanguage = (language: string) => {

        dispatch({

            type: 'CHANGE_LANGUAGE',
            payload: {

                name: language
            }
        })
    };

    
    return(

        <footer>
            <div className="languages">
                <div
                    className='pt'
                    onClick={() => {handleChangeLanguage('pt')}}
                >
                    
                </div>

                <div 
                    className='en'
                    onClick={() => {handleChangeLanguage('en')}}
                >  
                </div>

                <div 
                    className='es'
                    onClick={() => {handleChangeLanguage('es')}}
                >

                </div>
            </div>
            
            <p>{ footerMessage }</p>
        </footer>


    )


}