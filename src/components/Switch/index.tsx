import '../../assets/css/Switch.css';

import { useContext, useEffect } from 'react';
import { Context } from '../../contexts/Context';
import { usePersistedData } from '../../utils/usePersistedData';


export const Switch = () => {

    const { state, dispatch } = useContext(Context);
    const persistedData = usePersistedData('temp',  state.temp.isToggle);
    
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
        <div className='switch-temp'>
            <div className='temps'>
                <span>°F</span>
                <label className='switch' >
                    <input type='checkbox' checked={state.temp.isToggle} onChange={onToggle}/>
                    <span className='slider'/>
                </label>
                <span>°C</span>
            </div>        
        </div>
    )

}