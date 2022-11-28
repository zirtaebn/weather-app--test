import './Search.css';

import { IntlContext } from '../../contexts/IntlContext';
import { useLanguageString } from '../../hooks/useLanguageString';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Autocomplete from 'react-google-autocomplete';

export const Search = () => {

    const { state, dispatch } = useContext(IntlContext);
    const { searchMessage, searchPlaceholderMessage } = useLanguageString(state);
    const navigate = useNavigate();

    return(

        <div className="search">
            <h1 className="search__title">{ searchMessage }</h1>

            <Autocomplete
                apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                onPlaceSelected={(place) => {
                    
                    dispatch({

                        type: 'CHANGE_ADDRESS',
                        payload: {
                
                            lat: place.geometry?.location?.lat(), 
                            lng: place.geometry?.location?.lng(),
                        }
                    })

                    navigate('/weather');
                }}
                language = { state.language.name }
                placeholder={ searchPlaceholderMessage }
                className="search__input"    
            />
        </div>

    )
}

