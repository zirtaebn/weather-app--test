import './Geolocation.css';


import { Context } from "../../contexts/Context";
import { useErrorMessage } from '../../utils/useErrorMessage';

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";


export const Geolocation = () => {

    const { state, dispatch } = useContext(Context);
    const { error, subError } = useErrorMessage();
    const [ isLoading, setIsloading ] = useState(false);
    const navigate = useNavigate();
    let phrase: string = '';
    
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


    if(state.language.name === 'pt') {

        phrase = 'Ver previsão de onde você está';

    }else if(state.language.name === 'en') {

        phrase = 'See forecast from where you are';
        
    }else if(state.language.name === 'es'){

        phrase = 'Ver previsión desde donde estás';
    }

    return(

        <>
            { state.adress &&

                <div className='geo' onClick={getGeolocation}>{phrase}</div>

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