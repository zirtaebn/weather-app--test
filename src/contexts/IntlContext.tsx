import { LanguageType, languageInitialState, languageReducer} from '../reduces/languageReducer';
import { AdressType, adressInitialState, adressReducer} from '../reduces/adressReducer';
import { TempType, tempInitialState, tempReducer} from '../reduces/tempReducer';
import { reducerActionType } from '../types/reducerActionType';

import { useReducer, createContext} from "react";

export type initialStateType = {

    language:LanguageType, 
    adress:AdressType,
    temp:TempType
}

type IntlContextType = {

    state:initialStateType,
    dispatch: React.Dispatch<any>
}

const initialState = {

    language: languageInitialState,
    adress:adressInitialState,
    temp:tempInitialState
}


export const IntlContext = createContext<IntlContextType>({
    state:initialState,
    dispatch: () => null
})

const mainReducer = (state:initialStateType, action:reducerActionType) => ({

    language: languageReducer(state.language, action), 
    adress: adressReducer(state.adress, action), 
    temp: tempReducer(state.temp, action)
})


interface Props {

    children: React.ReactNode;
}

export const IntlContextProvider: React.FC<Props> = ({ children }) => {

    const [ state, dispatch ] = useReducer(mainReducer, initialState);

    return (

        <IntlContext.Provider value = {{ state, dispatch }}>
            { children }
        </IntlContext.Provider>
    )
}