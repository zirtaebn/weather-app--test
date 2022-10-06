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