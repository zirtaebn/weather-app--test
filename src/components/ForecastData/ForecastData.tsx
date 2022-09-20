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
    let { forecastDataMessage, errorMessage, subErrorMessage } = useLanguageString(); 

    const data = response?.list.filter((item:weatherDataType) => {
        const date = new Date(new Date().setHours(18)).getHours();

        const weatherDate = new Date(item.dt_txt).getHours();    
    
        return weatherDate === date
    }) 
   
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
                <h1>{response?.city.name.toUpperCase()}</h1>
                <h2>{forecastDataMessage}</h2>

                { data?.map((day, index) => (
                
                    <div className='next-days-data-row' key={index}>
                        <div className='day'>
                            {
                                new Date(day.dt_txt)
                                .toLocaleDateString(`${state.language.name}`, { day:'numeric', month:'short', weekday:'short'})
                            }
                        </div>

                        <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt='open weather icon' />
                        <p>{day.main.temp_max.toFixed(0)}°</p>
                        <div className='temp-line'></div>
                        <p>{day.main.temp_min.toFixed(0)}°</p>
                        <span>{day.weather[0].description}</span>
                    </div>
                
                ))}
            </>

        </div>
    )
}