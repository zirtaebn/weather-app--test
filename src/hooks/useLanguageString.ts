import { languageStringType } from '../types/languageStringType';
import { initialStateType } from '../contexts/IntlContext';

const languageString:languageStringType = {

    footerMessage: '',
    geolocationMessage: '',
    forecastDataMessage: '',
    searchMessage: '',
    searchPlaceholderMessage: '',
    weatherDataMessage: '', 
    errorMessage: '',
    subErrorMessage: '',
    notFoundPageMessage: ''

}

export const useLanguageString = (state: initialStateType) => {

    switch (state.language.name ) {

        case 'pt':

            return { 
                ...languageString,
                footerMessage:'Idioma selecionado: Português.',
                geolocationMessage:'Ver previsão de onde você está',
                forecastDataMessage:'Previsão para 5 dias',
                searchMessage:'Como está o tempo hoje?',
                searchPlaceholderMessage:'Digite o nome da cidade',
                weatherDataMessage:'Ver previsão para os próximos 5 dias',
                errorMessage:'Houve um erro!',
                subErrorMessage:'Verifique a conexão.',
                notFoundPageMessage:'Página não encontrada'
            }
        
        // eslint-disable-next-line
        break

        case 'en':

            return {
                ...languageString, 
                footerMessage:'Selected language: English.',
                geolocationMessage:'See forecast from where you are',
                forecastDataMessage:'Forecast for 5 days',
                searchMessage:"How's the weather today?",
                searchPlaceholderMessage:'Enter a city name',
                weatherDataMessage:'See forecast for the next 5 days',
                errorMessage:"There's been an error!",
                subErrorMessage:'Check your connection.',
                notFoundPageMessage:'Page not found'
            }
        
        // eslint-disable-next-line
        break

        case 'es':

            return {
                ...languageString, 
                footerMessage:'Idioma seleccionado: Español.',
                geolocationMessage:'Ver previsión desde donde estás',
                forecastDataMessage:'Previsión para 5 días',
                searchMessage:'¿Como está el tiempo hoy?',
                searchPlaceholderMessage:'Introduzca el nombre de la ciudad',
                weatherDataMessage:'Ver previsión para los próximos 5 días',
                errorMessage:'¡Ha habido un error!',
                subErrorMessage:'Comprueba tu conexión.',
                notFoundPageMessage:'Página no encontrada'
            }
        
        // eslint-disable-next-line
        break
    }
    
    return languageString
}