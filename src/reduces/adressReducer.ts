import { reducerActionType } from '../types/reducerActionType';

export type AdressType = {

    lat:string,
    lng:string
}

export const adressInitialState:AdressType = {

    lat: '',
    lng: ''
}

export const adressReducer = (state:AdressType, action:reducerActionType) => {

    switch (action.type) {

        case 'CHANGE_ADRESS':

            return {...state, lat: action.payload.lat, lng:action.payload.lng}
        
        // eslint-disable-next-line
        break
            
    }

    return state;

}