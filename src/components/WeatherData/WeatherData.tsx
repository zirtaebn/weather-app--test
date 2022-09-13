import './WeatherData.css';

import { OPEN_WEATHER_BASE_URL } from '../../utils/openWeatherBaseURL';
import { useLanguageString } from '../../utils/useLanguageString';
import { Context } from '../../contexts/Context';
import { weatherDataType } from '../../types/weatherDataType';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';



export const WeatherData = () => {

    const { state } = useContext(Context);
    const [ data, setData ] = useState<weatherDataType | undefined>();
    const [ isLoading, setIsloading ] = useState(false);
    const URL = OPEN_WEATHER_BASE_URL('weather');
    const navigate = useNavigate();
    const { weatherDataMessage, errorMessage, subErrorMessage } = useLanguageString();
  
    
    useEffect(() => {

        if(!state.adress.lat && !state.adress.lng) {

            navigate('/');

        }else {

            axios.get(URL)
            .then(response => {

                setIsloading(true);
                setData(response.data);
                setIsloading(false);
            })
            .catch(err => {
                
                console.log(err);
                setIsloading(true)
            
            });
        }

      // eslint-disable-next-line
    },[state]);

   
    return(

        <div className='weather-data'>

            { data && 

                <>
                    {data.name && <h1>{data.name.toUpperCase()}</h1>}
                    <h2>{data.weather[0].description}</h2>

                    <div className='weather-data-row'>
                        { data.main.temp && <p>{data.main.temp.toFixed(0)}°</p> }
                        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='open weather icon' />
                    </div>
                    <div className='weather-data-temps'>
                        <span>MAX:</span><p>{data.main.temp_max.toFixed(0)}°</p>
                        <span>MIN:</span><p>{data.main.temp_min.toFixed(0)}°</p>
                    </div>

                    <Link className='link' to='/nextdays'>{weatherDataMessage}</Link>
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