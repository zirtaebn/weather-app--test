import '../../css/WeatherData.css';

import { Link } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';

import { OPEN_WEATHER_URL } from '../../Api/api';
import { Context } from '../../contexts/Context';
import { weatherDataType } from '../../types/weatherDataType'

import axios from 'axios';


export const WeatherData = () => {

    const { state } = useContext(Context);
    const [ data, setData ] = useState<weatherDataType | undefined>();

    let units:string;
    if(state.temp.isToggle) {

        units = 'metric'
    }else {

        units = 'imperial'
    }

    let phrase: string = '';
    if(state.language.name === 'pt') {

        phrase = 'Ver previsão para os próximos 5 dias';

    }else if(state.language.name === 'en') {

        phrase = 'See forecast for the next 5 days';

    }else if(state.language.name === 'es'){

        phrase = 'Ver previsión para los próximos 5 días'
    }

    useEffect(() => {

        axios.get(`${OPEN_WEATHER_URL}/weather?lat=${state.adress.lat}&lon=${state.adress.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=${state.language.name}&units=${units}`)
        .then(response => setData(response.data));

      // eslint-disable-next-line
    },[state.language.name, state.temp.isToggle]);


    if(!data) return null;

    return(

        <div className='weather-data'>
        
            <h1>{data.name}</h1>
            <h2>{data.weather[0].description}</h2>

            <div className='weather-data-row'>
                <p>{data.main.temp.toFixed(0)}°</p>
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='open weather icon' />
            </div>
            <div className='weather-data-temps'>
                <span>MAX:</span><p>{data.main.temp_max.toFixed(0)}°</p>
                <span>MIN:</span><p>{data.main.temp_min.toFixed(0)}°</p>
            </div>

            <Link className='link' to='/nextdays'>{phrase}</Link>
        </div>
    )
}