import { Context } from '../contexts/Context';

import { useContext } from 'react';

export const OPEN_WEATHER_BASE_URL = (parameter: string) => {

    const { state } = useContext(Context);

    const URL = `${parameter}?lat=${state.adress.lat}&lon=${state.adress.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=${state.language.name}&units=${state.temp.isToggle ? 'metric' : 'imperial'}`;

    return URL
}