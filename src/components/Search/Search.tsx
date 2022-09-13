import './Search.css';

import { Context } from '../../contexts/Context';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Autocomplete from "react-google-autocomplete";
import { useSearchMessage } from '../../utils/useSearchMessage';



export const Search = () => {

    const { state, dispatch } = useContext(Context);
    const { searchMessage, placeholderMessage } = useSearchMessage();
    const navigate = useNavigate();

   
    return(

        <div className='search-input'>
            <h1>{ searchMessage }</h1>

            <Autocomplete
                apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                onPlaceSelected={(place) => {

                    dispatch({

                        type: 'CHANGE_ADRESS',
                        payload: {
                
                            lat: place.geometry?.location?.lat(), 
                            lng: place.geometry?.location?.lng(),
                        }
                    })

                    navigate('/weather');
                }}
                language = { state.language.name }
                placeholder={ placeholderMessage }    
            />
        </div>

    )
}

