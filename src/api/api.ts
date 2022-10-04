import axios from 'axios';
import { weatherDataType } from '../types/weatherDataType';

const URL = 'https://api.openweathermap.org/data/2.5/';

const fetchWeatherData = async (requestParams:string): Promise<weatherDataType> => {

    const response = await axios.get(`${URL}${requestParams}`);

    return response.data
}

const fetchForecastData = async (requestParams:string) => {

    const response = await axios.get(`${URL}${requestParams}`);

    return response.data
}

export const api = {
    fetchWeatherData,
    fetchForecastData
}