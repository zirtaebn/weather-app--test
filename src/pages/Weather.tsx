import { Arrow } from '../components/Arrow/Arrow';
import { WeatherData } from '../components/WeatherData/WeatherData';
import { Link } from 'react-router-dom';


export const Weather = () => {

    return(
        <div>
            <Link to='/'><Arrow /></Link>
            <WeatherData />
        </div>
    )
}