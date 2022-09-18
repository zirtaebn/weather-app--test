import './WeatherData.css';

import { OPEN_WEATHER_BASE_URL } from '../../utils/openWeatherBaseURL';
import { useLanguageString } from '../../hooks/useLanguageString';
import { Context } from '../../contexts/Context';
import { weatherDataType } from '../../types/weatherDataType';
import { useFetch } from '../../hooks/useFetch';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';



export const WeatherData = () => {

    const { state } = useContext(Context);
    const { weatherDataMessage, errorMessage, subErrorMessage } = useLanguageString();
    const { data, isLoading, isError } = useFetch('weather');
    const navigate = useNavigate();
   
    useEffect(() => {

        if(!state.adress.lat && !state.adress.lng) {

            navigate('/');

        }

      // eslint-disable-next-line
    },[]);

    if(isLoading) {
        return <h1>...</h1>
    }

    if(isError) {

        return (
            <>
                <h1>{errorMessage}</h1>
                <h2>{subErrorMessage}</h2>
            </>
        )
    }

   
    return(

        <div className='weather-data'>

            <>
                <h1>{data?.name?.toUpperCase()}</h1>
                <h2>{data?.weather[0].description}</h2>
    
                <div className='weather-data-row'>
                    <p>{data?.main.temp?.toFixed(0)}°</p>
                    <img 
                        src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} 
                        alt='open weather icon' 
                    />
                </div>

                <div className='weather-data-temps'>
                    <span>MAX:</span> <p>{data?.main.temp_max.toFixed(0)}°</p>
                    <span>MIN:</span> <p>{data?.main.temp_min.toFixed(0)}°</p>
                </div>
    
                <Link className='link' to='/forecast'>{ weatherDataMessage }</Link>
                       
            </>

        </div>
    )
}