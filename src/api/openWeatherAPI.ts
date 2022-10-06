import { forecastDataType } from '../types/forecastDataType';
import { weatherDataType } from '../types/weatherDataType';

import axios from 'axios';

const fetchWeatherData = async (requestParams:string): Promise<weatherDataType> => {

    const response = await axios.get(requestParams);

    return response.data
}

const fetchForecastData = async (requestParams:string): Promise<forecastDataType> => {

    const { data } = await axios.get(requestParams);

    const cityName = data.city.name; 
    const weatherDataList = data?.list.filter((weatherDataItem:weatherDataType) => {
        const date = new Date(new Date().setHours(18)).getHours();

        const weatherData = new Date(weatherDataItem.dt_txt).getHours();    
    
        return weatherData === date
    });

    return { cityName, weatherDataList }
}

export const openWeatherAPI = {
    fetchWeatherData,
    fetchForecastData
}