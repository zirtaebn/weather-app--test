import './ForecastData.css';

import { Context } from '../../contexts/Context';
import { useLanguageString } from '../../hooks/useLanguageString';
import { useFetch } from '../../hooks/useFetch';
import { weatherDataType } from '../../types/weatherDataType';
import { forecastDataType } from '../../types/forecastDataType';

import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ForecastData = () => {

    const { state } = useContext(Context);
    const navigate = useNavigate();
    const [ response, isLoading, isError ] = useFetch<forecastDataType>('forecast');
    const cityName = response ? response.city.name : '';
    const forecastData = response?.list.filter((item:weatherDataType) => {
        const date = new Date(new Date().setHours(18)).getHours();

        const weatherDate = new Date(item.dt_txt).getHours();    
    
        return weatherDate === date
    });
    let { forecastDataMessage, errorMessage, subErrorMessage } = useLanguageString(); 
   
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
    

    return (
        <div className='next-days-data'>
            <>
                <h1>{cityName.toUpperCase()}</h1>
                <h2>{forecastDataMessage}</h2>

                { forecastData?.map((weatherData, index) => (
                
                    <div className='next-days-data-row' key={index}>
                        <div className='day'>
                            {
                                new Date(weatherData.dt_txt).toLocaleDateString(
                                    
                                    `${state.language.name}`
                                    , 
                                    { day:'numeric', month:'short', weekday:'short'}
                                )
                            }
                        </div>

                        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt='open weather icon' />
                        <p>{weatherData.main.temp_max.toFixed(0)}°</p>
                        <div className='temp-line'></div>
                        <p>{weatherData.main.temp_min.toFixed(0)}°</p>
                        <span>{weatherData.weather[0].description}</span>
                    </div>
                
                ))}
            </>

        </div>
    )
}