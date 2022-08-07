import { reducerActionType } from '../types/reducerActionType';

export type LanguageType = {

    name:string
}

export const languageInitialState:LanguageType = {

    name: 'pt'
}

export const languageReducer = (state:LanguageType, action:reducerActionType) => {

    switch (action.type) {

        case 'CHANGE_LANGUAGE':
            
            return {...state, name: action.payload.name}
        
        // eslint-disable-next-line
        break
            
        
    
    }

    return state;

}