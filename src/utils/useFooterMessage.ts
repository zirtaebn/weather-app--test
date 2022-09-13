import { useContext } from 'react';
import { Context } from '../contexts/Context';


export const useFooterMessage = () => {

    const { state } = useContext(Context);
    let footerMessage = '';


    if(state.language.name === 'pt') {

        footerMessage = 'Idioma selecionado: Português.';

    }else if(state.language.name === 'en') {

        footerMessage = 'Selected language: English.';

    }else if(state.language.name === 'es'){

        footerMessage = 'Idioma seleccionado: Español.'
    }


    return footerMessage
}