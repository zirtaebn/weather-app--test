import { reducerActionType } from '../types/reducerActionType';

export type addressType = {

    lat:string,
    lng:string,
    
}

export const addressInitialState:addressType = {

    lat: '',
    lng: '',
    
}

export const addressReducer = (state:addressType, action:reducerActionType) => {

    switch (action.type) {

        case 'CHANGE_ADDRESS':

            return {...state, lat: action.payload.lat, lng:action.payload.lng}
        
        // eslint-disable-next-line
        break
            
    }

    return state;

}