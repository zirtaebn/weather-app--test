import './ForecastData.css';

import { Context } from '../../contexts/Context';
import { useLanguageString } from '../../hooks/useLanguageString';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loading } from '../Loading/Loading';
import { openWeatherURL } from '../../services/openWeatherURL';
import { openWeatherAPI } from '../../api/openWeatherAPI';

import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

export const ForecastData = () => {

    const { state } = useContext(Context);
    const { forecastDataMessage } = useLanguageString(state);
    const navigate = useNavigate();
    const queryKey = 'forecast';
    const requestParams = openWeatherURL(queryKey, state);
    const { data: forecastData, isLoading, isError } = useQuery([queryKey, state], 

        () => openWeatherAPI.fetchForecastData(requestParams),

        {
            refetchOnWindowFocus: false
        }
    );
    
     const { cityName, forecastDataList } = forecastData || {}

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
    
    return (
        <div className="forecast-data">
            <>
                <h1 className="forecast-data__title">{cityName?.toUpperCase()}</h1>
                <h2 className="forecast-data__sub-title">{forecastDataMessage}</h2>

                <ul className="forecast-data__list">
                    { forecastDataList?.map((forecastDataItem, index) => (
                    
                        <li className="forecast-data__item" key={index}>
                            <div className="forecast-data__date">
                                {
                                    new Date(forecastDataItem.dt_txt).toLocaleDateString(
                                        
                                        `${state.language.name}`
                                        , 
                                        { day:'numeric', month:'short', weekday:'short'}
                                    )
                                }
                            </div>

                            <img className="forecast-data__image" src={`https://openweathermap.org/img/wn/${forecastDataItem.weather[0].icon}@2x.png`} alt='open weather icon' />
                            <p className="forecast-data__temp">{forecastDataItem.main.temp_min.toFixed(0)}°</p>
                            <span className="forecast-data__temp-line"></span>
                            <p className="forecast-data__temp">{forecastDataItem.main.temp_max.toFixed(0)}°</p>
                            <span className="forecast-data__description">{forecastDataItem.weather[0].description}</span>
                        </li>
                 
                    ))}
                </ul>
            </>

        </div>
    )
}