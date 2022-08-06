import './styles.css';


export const Switch = () => {

    return (
        <div className='switch-temp'>
            <div className='temps'>
            <span>°F</span>
            <label className='switch'>
                <input type='checkbox'/>
                <span className='slider'/>
            </label>
            <span>°C</span>
            </div>
        </div>
    )

}