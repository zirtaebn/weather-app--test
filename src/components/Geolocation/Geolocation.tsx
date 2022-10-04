import './Geolocation.css';

import { Context } from "../../contexts/Context";
import { useLanguageString } from '../../hooks/useLanguageString';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

export const Geolocation = () => {

    const { state, dispatch } = useContext(Context);
    const [ isLoading, setIsloading ] = useState(false);
    const navigate = useNavigate();
    const { geolocationMessage }= useLanguageString(state);
    
    const success = (pos:GeolocationPosition) => {

        setIsloading(true);

        dispatch({

            type: 'CHANGE_ADRESS',
            payload: {
    
                lat: pos.coords.latitude, 
                lng: pos.coords.longitude,
            }
        })

        navigate('/weather');

        setIsloading(false);

    }

    const err = (err:GeolocationPositionError) => {

        console.log(err);
        setIsloading(true);            
    }

    const getGeolocation = () => {

        navigator.geolocation.getCurrentPosition(success, err);
    
    }

    if(isLoading) {

        return (

            <div className="geolocation__error">
                <ErrorMessage />
            </div>

        )
    }

    return(

        <span className="geolocation">
            { state.adress &&

                <div className="geolocation__link" onClick={getGeolocation}>{geolocationMessage}</div>

            }
        </span>

    )

}