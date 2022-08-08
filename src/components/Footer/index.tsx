import './styles.css';

import { Context } from '../../contexts/Context';

import { useContext } from 'react';

    

export const Footer = () => {

    const { state, dispatch } = useContext(Context);
    let phrase: string = 'Idioma selecionado';

    const handleChangeLanguage = (language: string) => {

        dispatch({

            type: 'CHANGE_LANGUAGE',
            payload: {

                name: language
            }
        })
    }

    if(state.language.name === 'pt') {

        phrase = 'Idioma selecionado: Português.';

    }else if(state.language.name === 'en') {

        phrase = 'Selected language: English.';

    }else {

        phrase = 'Idioma seleccionado: Español.'
    }

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