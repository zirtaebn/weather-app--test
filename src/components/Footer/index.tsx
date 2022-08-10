import '../../assets/css/Footer.css'

import { Context } from '../../contexts/Context';
import { usePersistedData } from '../../utils/usePersistedData';
import { useContext, useEffect } from 'react';



export const Footer = () => {

    const { state, dispatch } = useContext(Context);
    const persistedData = usePersistedData('language',  state.language.name);
    let phrase: string = '';
    

    useEffect(() => {
        
        dispatch({

            type: 'CHANGE_LANGUAGE',
            payload: {

                name: persistedData 
            }
        })
        // eslint-disable-next-line
    },[]);


    if(state.language.name === 'pt') {

        phrase = 'Idioma selecionado: Português.';

    }else if(state.language.name === 'en') {

        phrase = 'Selected language: English.';

    }else if(state.language.name === 'es'){

        phrase = 'Idioma seleccionado: Español.'
    }
    

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
            
            <p>{ phrase }</p>
        </footer>


    )


}