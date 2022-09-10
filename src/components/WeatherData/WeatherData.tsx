import './WeatherData.css';

import { OPEN_WEATHER_BASE_URL } from '../../utils/openWeatherBaseURL';
import { useErrorMessage } from '../../utils/useErrorMessage';
import { Context } from '../../contexts/Context';
import { weatherDataType } from '../../types/weatherDataType';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';


export const WeatherData = () => {

    const { state } = useContext(Context);
    const { error, subError } = useErrorMessage();
    const [ data, setData ] = useState<weatherDataType | undefined>();
    const [ isLoading, setIsloading ] = useState(false);
    const navigate = useNavigate();
    let units:string;
    let phrase: string = '';
   

    if(state.temp.isToggle) {

        units = 'metric'
    }else {

        units = 'imperial'
    }

    if(state.language.name === 'pt') {

        phrase = 'Ver previsão para os próximos 5 dias';
      
    }else if(state.language.name === 'en') {

        phrase = 'See forecast for the next 5 days';
      
    }else if(state.language.name === 'es'){

        phrase = 'Ver previsión para los próximos 5 días';
    }

    useEffect(() => {

        if(!state.adress.lat && !state.adress.lng) {

            navigate('/');

        }else {

            axios.get(`${OPEN_WEATHER_BASE_URL}/weather?lat=${state.adress.lat}&lon=${state.adress.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=${state.language.name}&units=${units}`)
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
                    {data.name && <h1>{data.name}</h1>}
                    <h2>{data.weather[0].description}</h2>

                    <div className='weather-data-row'>
                        { data.main.temp && <p>{data.main.temp.toFixed(0)}°</p> }
                        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='open weather icon' />
                    </div>
                    <div className='weather-data-temps'>
                        <span>MAX:</span><p>{data.main.temp_max.toFixed(0)}°</p>
                        <span>MIN:</span><p>{data.main.temp_min.toFixed(0)}°</p>
                    </div>

                    <Link className='link' to='/nextdays'>{phrase}</Link>
                </>
            
            }

            { isLoading &&

                <>  
                    <h1>{error}</h1>
                    <h2>{subError}</h2>
                </>
                
            }
        </div>
    )
}