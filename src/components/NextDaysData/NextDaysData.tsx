import './NextDaysData.css';


import { OPEN_WEATHER_BASE_URL } from '../../utils/openWeatherBaseURL';
import { Context } from '../../contexts/Context';
import { weatherDataType } from '../../types/weatherDataType';
import { useLanguageString } from '../../utils/useLanguageString';

import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  



export const NextDaysData = () => {

    const { state } = useContext(Context);
    const [ data, setData ] = useState<weatherDataType[] | undefined>();
    const [ cityName, setCityName ] = useState('');
    const [ isLoading, setIsloading ] = useState(false);
    const navigate = useNavigate();
    const URL = OPEN_WEATHER_BASE_URL('forecast');
    let { nextDaysDataMessage, errorMessage, subErrorMessage} = useLanguageString(); 
    
   
    useEffect(() => {

        if(!state.adress.lat && !state.adress.lng) {

            navigate('/');

        }else{

            axios.get(URL)
            .then(response => {

                const date = new Date(new Date().setHours(18)).getHours();

            
                const list = response.data.list.filter((item:any) => {

                    const weatherDate = new Date(item.dt_txt).getHours();    

                    return weatherDate === date
                })      
                
                setIsloading(true);
                setCityName(response.data.city.name);
                setData(list);
                setIsloading(false);
            })
            .catch(err => {

                console.log(err);
                setIsloading(true);
            });


        }
      // eslint-disable-next-line
    },[state]);

    return (
        <div className='next-days-data'>
            { data && 
                <>
                    <h1>{cityName.toUpperCase()}</h1>
                    <h2>{nextDaysDataMessage}</h2>   
                    { data.map((item, index) => (
                
                        <div className='next-days-data-row' key={index}>
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

            { isLoading &&

                <>  
                    <h1>{errorMessage}</h1>
                    <h2>{subErrorMessage}</h2>
                </>

            }
            
        </div>
    )
}