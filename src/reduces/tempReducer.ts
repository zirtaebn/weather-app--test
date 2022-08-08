import { reducerActionType } from '../types/reducerActionType';

export type TempType = {

    isToggle:boolean
}

export const tempInitialState:TempType = {

    isToggle: true
}

export const tempReducer = (state:TempType, action:reducerActionType) => {

    switch (action.type) {

        case 'CHANGE_TEMP':

            return {...state, isToggle: action.payload.isToggle}
        
        // eslint-disable-next-line
        break
            
    }

    return state;

}