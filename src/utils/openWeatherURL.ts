import { initialStateType } from '../contexts/Context';

export const openWeatherURL = (parameter: string, state: initialStateType) => {
    
    return `${parameter}?lat=${state.adress.lat}&lon=${state.adress.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=${state.language.name}&units=${state.temp.isToggle ? 'metric' : 'imperial'}`;
}