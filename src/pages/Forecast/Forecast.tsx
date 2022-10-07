import { Arrow } from '../../components/Arrow/Arrow';
import { ForecastData } from '../../components/ForecastData/ForecastData';
import { Switch } from '../../components/Switch/Switch';
import { Footer } from '../../components/Footer/Footer';

import { Link } from 'react-router-dom';

export const Forecast = () => {

    return(

        <>
            <Switch />
            <Link to='/weather'><Arrow /></Link>
            <ForecastData />
            <Footer />
        </>
    )
}