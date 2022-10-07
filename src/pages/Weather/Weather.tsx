import { Arrow } from '../../components/Arrow/Arrow';
import { WeatherData } from '../../components/WeatherData/WeatherData';
import { Switch } from '../../components/Switch/Switch';
import { Footer } from '../../components/Footer/Footer';

import { Link } from 'react-router-dom';

export const Weather = () => {

    return(
        <>
            <Switch />
            <Link to='/'><Arrow /></Link>
            <WeatherData />
            <Footer />
        </>
    )
}