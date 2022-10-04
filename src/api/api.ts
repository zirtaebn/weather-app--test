import { forecastDataType } from '../types/forecastDataType';
import { weatherDataType } from '../types/weatherDataType';

import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5/';

const fetchWeatherData = async (requestParams:string): Promise<weatherDataType> => {

    const response = await axios.get(`${baseURL}${requestParams}`);

    return response.data
}

const fetchForecastData = async (requestParams:string): Promise<forecastDataType> => {

    const response = await axios.get(`${baseURL}${requestParams}`);

    return response.data
}

export const api = {
    fetchWeatherData,
    fetchForecastData
}