import { useContext } from 'react';
import { Context } from '../contexts/Context';


export const OPEN_WEATHER_BASE_URL = (parameter: string) => {

    const { state } = useContext(Context);

    const URL = `https://api.openweathermap.org/data/2.5/${parameter}?lat=${state.adress.lat}&lon=${state.adress.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=${state.language.name}&units=${state.temp.isToggle ? 'metric' : 'imperial'}`;

    return URL
}