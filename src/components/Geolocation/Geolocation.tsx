import './Geolocation.css';

import { Context } from "../../contexts/Context";
import { useLanguageString } from '../../hooks/useLanguageString';

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

export const Geolocation = () => {

    const { state, dispatch } = useContext(Context);
    const [ isLoading, setIsloading ] = useState(false);
    const navigate = useNavigate();
    let { geolocationMessage, errorMessage, subErrorMessage }= useLanguageString();
    
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

    return(

        <>
            { state.adress &&

                <div className='geo' onClick={getGeolocation}>{geolocationMessage}</div>

            }

            { isLoading &&

                <div className='error'>
                    <h3>{errorMessage}</h3>
                    <h4>{subErrorMessage}</h4>
                </ div>
            
            }
        
        </>

    )

}