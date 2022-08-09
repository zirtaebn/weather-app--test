import '../../css/NextDaysData.css';

import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { OPEN_WEATHER_BASE_URL } from '../../utils/openWeatherBaseURL';

import { Context } from '../../contexts/Context';

import { weatherDataType } from '../../types/weatherDataType'

import axios from 'axios';   


export const NextDaysData = () => {

    const { state } = useContext(Context);
    const [ data, setData ] = useState<weatherDataType[] | undefined>();
    const [ cityName, setCityName ] = useState('');
    const navigate = useNavigate();

    let units:string;
    if(state.temp.isToggle) {

        units = 'metric'
    }else {

        units = 'imperial'
    }

    
    let subTitle: string = '';
    if(state.language.name === 'pt') {

        subTitle = 'Previsão para os próximos 5 dias';

    }else if(state.language.name === 'en') {

        subTitle = 'Forecast for the next 5 days';

    }else if(state.language.name === 'es'){

        subTitle = 'Previsión para los próximos 5 días'
    }

    useEffect(() => {

        axios.get(`${OPEN_WEATHER_BASE_URL}/forecast?lat=${state.adress.lat}&lon=${state.adress.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=${state.language.name}&units=${units}`)
        .then(response => {

            const date = new Date(new Date().setHours(18)).getHours();

        
            const list = response.data.list.filter((item:any) => {

               const weatherDate = new Date(item.dt_txt).getHours();    

                return weatherDate === date
            })      
            
            setCityName(response.data.city.name);
            setData(list);
        })
        .catch(err => console.log(err));
      
      // eslint-disable-next-line
    },[state.language.name, state.temp.isToggle]);


    if(!data) {

        navigate('/')
    };

    return (
        <div className='next-days-data'>
            { data && 
                <>
                    <h1>{cityName}</h1>
                    <h2>{subTitle}</h2>   
                    { data.map((item) => (
                
                        <div className='next-days-data-row'>
                            <div className='day'>
                                {
                                    new Date(item.dt_txt).toLocaleDateString(

                                        `${state.language.name}`, { day:'numeric', month:'short', weekday:'short'}
                                    )
                                }
                            </div>
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='open weather icon' />
                            <p>{item.main.temp_max.toFixed(0)}°</p>
                            <div className='temp-line'></div>
                            <p>{item.main.temp_min.toFixed(0)}°</p>
                            <span>{item.weather[0].description}</span>
                        </div>
                
                    ))}
                </>
            }
        </div>
    )
}