import { forecastDataType } from '../types/forecastDataType';
import { weatherDataType } from '../types/weatherDataType';

import axios from 'axios';

const fetchWeatherData = async (requestParams:string): Promise<weatherDataType> => {

    const response = await axios.get(requestParams);

    return response.data
}

const fetchForecastData = async (requestParams:string): Promise<forecastDataType> => {

    const response = await axios.get(requestParams);

    return response.data
}

export const openWeatherAPI = {
    fetchWeatherData,
    fetchForecastData
}