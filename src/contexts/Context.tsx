import { useReducer, createContext} from "react";


import { LanguageType, languageInitialState, languageReducer} from '../reduces/languageReducer';
import { reducerActionType } from "../types/reducerActionType";

type initialStateType = {

    language:LanguageType
}

type ContextType = {

    state:initialStateType,
    dispatch: React.Dispatch<any>
}

const initialState = {

    language: languageInitialState
}


export const Context = createContext<ContextType>({
    state:initialState,
    dispatch: () => null
})

const mainReducer = (state:initialStateType, action:reducerActionType) => ({

    language: languageReducer(state.language, action)
})


interface Props {

    children: React.ReactNode;
}


export const ContextProvider: React.FC<Props> = ({ children }) => {

    const [ state, dispatch ] = useReducer(mainReducer, initialState);

    return (

        <Context.Provider value = {{ state, dispatch}}>
            { children }
        </Context.Provider>
    )
}