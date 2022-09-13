import './Geolocation.css';

import { Context } from "../../contexts/Context";
import { useErrorMessage } from '../../utils/useErrorMessage';

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useLanguageString } from '../../utils/useLanguageString';


export const Geolocation = () => {

    const { state, dispatch } = useContext(Context);
    const { error, subError } = useErrorMessage();
    const [ isLoading, setIsloading ] = useState(false);
    const navigate = useNavigate();
    let { geolocationMessage }= useLanguageString();
    
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
                    <h3>{error}</h3>
                    <h4>{subError}</h4>
                </ div>
            
            }
        
        </>

    )

}