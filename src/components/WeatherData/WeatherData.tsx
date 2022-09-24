import './WeatherData.css';

import { useLanguageString } from '../../hooks/useLanguageString';
import { Context } from '../../contexts/Context';
import { useFetch } from '../../hooks/useFetch';
import { weatherDataType } from '../../types/weatherDataType';

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

export const WeatherData = () => {

    const { state } = useContext(Context);
    const { weatherDataMessage, errorMessage, subErrorMessage } = useLanguageString();
    const [ weatherData, isLoading, isError ] = useFetch<weatherDataType>('weather');
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
                <h1>{weatherData?.name?.toUpperCase()}</h1>
                <h2>{weatherData?.weather[0].description}</h2>
    
                <div className='weather-data-row'>
                    <p>{weatherData?.main.temp?.toFixed(0)}°</p>
                    <img 
                        src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`} 
                        alt='open weather icon' 
                    />
                </div>

                <div className='weather-data-temps'>
                    <span>MAX:</span> <p>{weatherData?.main.temp_max.toFixed(0)}°</p>
                    <span>MIN:</span> <p>{weatherData?.main.temp_min.toFixed(0)}°</p>
                </div>
    
                <Link className='link' to='/forecast'>{ weatherDataMessage }</Link>
                       
            </>

        </div>
    )
}