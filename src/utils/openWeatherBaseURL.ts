import { Context, initialStateType } from '../contexts/Context';

export const OPEN_WEATHER_BASE_URL = (parameter: string, state: initialStateType) => {
    
    const URL = `${parameter}?lat=${state.adress.lat}&lon=${state.adress.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=${state.language.name}&units=${state.temp.isToggle ? 'metric' : 'imperial'}`;

    return URL
}