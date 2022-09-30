import './ForecastData.css';

import { Context } from '../../contexts/Context';
import { useLanguageString } from '../../hooks/useLanguageString';
import { useFetch } from '../../hooks/useFetch';
import { weatherDataType } from '../../types/weatherDataType';
import { forecastDataType } from '../../types/forecastDataType';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ForecastData = () => {

    const { state } = useContext(Context);
    const navigate = useNavigate();
    const [ forecastData, isLoading, isError ] = useFetch<forecastDataType>('forecast');
    const cityName = forecastData ? forecastData.city.name : '';
    const { forecastDataMessage } = useLanguageString(); 
    const weatherDataList = forecastData?.list.filter((item:weatherDataType) => {
        const date = new Date(new Date().setHours(18)).getHours();

        const weatherDate = new Date(item.dt_txt).getHours();    
    
        return weatherDate === date
    });
    
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
        
        return <ErrorMessage />
    }
    

    return (
        <div className="forecast-data">
            <>
                <h1 className="forecast-data__title">{cityName.toUpperCase()}</h1>
                <h2 className="forecast-data__sub-title">{forecastDataMessage}</h2>

                <ul className="forecast-data__list">
                    { weatherDataList?.map((weatherData, index) => (
                    
                        <li className="forecast-data__item" key={index}>
                            <div className="forecast-data__date">
                                {
                                    new Date(weatherData.dt_txt).toLocaleDateString(
                                        
                                        `${state.language.name}`
                                        , 
                                        { day:'numeric', month:'short', weekday:'short'}
                                    )
                                }
                            </div>

                            <img className="forecast-data__image" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt='open weather icon' />
                            <p className="forecast-data__temp">{weatherData.main.temp_min.toFixed(0)}°</p>
                            <span className="forecast-data__temp-line"></span>
                            <p className="forecast-data__temp">{weatherData.main.temp_max.toFixed(0)}°</p>
                            <span className="forecast-data__description">{weatherData.weather[0].description}</span>
                        </li>
                 
                    ))}
                </ul>
            </>

        </div>
    )
}