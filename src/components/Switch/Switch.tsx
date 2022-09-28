import './Switch.css';

import { Context } from '../../contexts/Context';
import { usePersistedData } from '../../hooks/usePersistedData';

import { useContext, useEffect } from 'react';

export const Switch = () => {

    const { state, dispatch } = useContext(Context);
    const persistedData = usePersistedData('temp',  JSON.stringify(state.temp.isToggle));
    
    const onToggle = () => {

        dispatch({

            type: 'CHANGE_TEMP',
            payload: {

                isToggle: !state.temp.isToggle
            }
        })
    }
    
    useEffect(() => {
        
        dispatch({

            type: 'CHANGE_TEMP',
            payload: {

                isToggle: JSON.parse(persistedData)
            }
        })
        // eslint-disable-next-line
    },[]);

    return (
        <div className="switch">
            <div className="switch__temps">
                <span className="switch__temp">°F</span>
                <label className="switch__toggler" >
                    <input className="switch__input" type='checkbox' checked={state.temp.isToggle} onChange={onToggle}/>
                    <span className="switch__slider"/>
                </label>
                <span className="switch__temp">°C</span>
            </div>        
        </div>
    )

}