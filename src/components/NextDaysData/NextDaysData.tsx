import './NextDaysData.css';

import { OPEN_WEATHER_BASE_URL } from '../../utils/openWeatherBaseURL';
import { Context } from '../../contexts/Context';
import { weatherDataType } from '../../types/weatherDataType';
import { useLanguageString } from '../../utils/useLanguageString';

import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  
import { useQuery } from 'react-query';

export const NextDaysData = () => {

    const { state } = useContext(Context);
    const [ cityName, setCityName ] = useState('');
    const navigate = useNavigate();
    const URL = OPEN_WEATHER_BASE_URL('forecast');
    let { nextDaysDataMessage, errorMessage, subErrorMessage} = useLanguageString(); 

    const { data, isLoading, isError, error } = useQuery<weatherDataType[] | undefined>(['forecast', state], 

        async () => {

            const response = await axios.get(URL);
            const date = new Date(new Date().setHours(18)).getHours();

            setCityName(response.data.city.name);

            const list = response.data.list.filter((item:any) => {

                const weatherDate = new Date(item.dt_txt).getHours();    

                return weatherDate === date
            }) 

            return list
        },
        {
            refetchOnWindowFocus: false
        } 
    )
    
   
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

        console.log(error, 'teste');
        
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
                <h2>{nextDaysDataMessage}</h2>

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