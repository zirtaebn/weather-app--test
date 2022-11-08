import './Footer.css';

import { IntlContext } from '../../contexts/IntlContext';
import { usePersistedData } from '../../hooks/usePersistedData';
import { useLanguageString } from '../../hooks/useLanguageString';

import { useContext, useEffect } from 'react';

export const Footer = () => {

    const { state, dispatch } = useContext(IntlContext);
    const { footerMessage } = useLanguageString(state);
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

        <footer className="footer">
            <div className="footer__languages">
                <div
                    className="footer__language pt"
                    onClick={() => {handleChangeLanguage('pt')}}
                >
                    
                </div>

                <div 
                    className="footer__language en"
                    onClick={() => {handleChangeLanguage('en')}}
                >  
                </div>

                <div 
                    className="footer__language es"
                    onClick={() => {handleChangeLanguage('es')}}
                >

                </div>
            </div>
            
            <p className="footer__message">{ footerMessage }</p>
        </footer>


    )


}