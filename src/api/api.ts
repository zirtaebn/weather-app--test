import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/';

const fetchWeatherData = async (requestParams:string) => {

    const weatherData = await axios.get(`${URL}${requestParams}`);

    return weatherData
}

const fetchForecastData = async (requestParams:string) => {

    const forecastData = await axios.get(`${URL}${requestParams}`);

    return forecastData
}

export const api = {
    fetchWeatherData,
    fetchForecastData
}