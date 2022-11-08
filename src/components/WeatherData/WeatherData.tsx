import './WeatherData.css';

import { useLanguageString } from '../../hooks/useLanguageString';
import { IntlContext } from '../../contexts/IntlContext';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loading } from '../Loading/Loading';
import { openWeatherAPI } from '../../services/openWeatherAPI';

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';

export const WeatherData = () => {

    const { state } = useContext(IntlContext);
    const { weatherDataMessage } = useLanguageString(state);
    const navigate = useNavigate();
    const queryString = 'weather';
    const { data: weatherData, isLoading, isError } = useQuery([queryString, state], 

        () => openWeatherAPI.fetchWeatherData(state),

        {
            refetchOnWindowFocus: false
        }
    );

    useEffect(() => {

        if(!state.adress.lat && !state.adress.lng) {

            navigate('/');

        }

      // eslint-disable-next-line
    },[]);

    if(isLoading) {

        return <Loading />
    }

    if(isError) {

        return <ErrorMessage />
    }
    
   
    return(

        <div className="weather-data">
             
            <h1 className="weather-data__title">{weatherData?.name?.toUpperCase()}</h1>
            <h2 className="weather-data__sub-title">{weatherData?.weather[0].description}</h2>
    
            <div className="weather-data__row">
                <p className="weather-data__main-temp">{weatherData?.main.temp?.toFixed(0)}°</p>
                <img 
                    className="weather-data__image"
                    src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`} 
                    alt='open weather icon' 
                />
            </div>

            <div className="weather-data__row">
                <span>MAX:</span> 
                <p className="weather-data__temps">{weatherData?.main.temp_max.toFixed(0)}°</p>
                <span>MIN:</span>
                <p className="weather-data__temps">{weatherData?.main.temp_min.toFixed(0)}°</p>
            </div>
    
            <Link className="weather-data__link" to='/forecast'>{ weatherDataMessage }</Link>
        </div>
    )
}