import { forecastDataType } from '../types/forecastDataType';
import { weatherDataType } from '../types/weatherDataType';
import { initialStateType } from '../contexts/Context';

import axios from 'axios';

const openWeatherURL = (parameter: string, state: initialStateType) => {
    
    return `https://api.openweathermap.org/data/2.5/${parameter}?lat=${state.adress.lat}&lon=${state.adress.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=${state.language.name}&units=${state.temp.isToggle ? 'metric' : 'imperial'}`;
}

const fetchWeatherData = async (state: initialStateType): Promise<weatherDataType> => {

    const requestParams = openWeatherURL('weather', state);
    const { data } = await axios.get(requestParams);

    return data
}

const fetchForecastData = async (state: initialStateType): Promise<forecastDataType> => {

    const requestParams = openWeatherURL('forecast', state);
    const { data } = await axios.get(requestParams);

    const cityName = data.city.name; 
    const forecastDataList = data?.list.filter((forecastDataItem:weatherDataType) => {
        const date = new Date(new Date().setHours(18)).getHours();

        const forecastDataDate = new Date(forecastDataItem.dt_txt).getHours();    
    
        return forecastDataDate === date
    });

    return { cityName, forecastDataList }
}

export const openWeatherAPI = {
    fetchWeatherData,
    fetchForecastData
}