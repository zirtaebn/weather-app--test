import { Arrow } from '../../components/Arrow/Arrow';
import { ForecastData } from '../../components/ForecastData/ForecastData';
import { Link } from 'react-router-dom';

export const NextDays = () => {

    return(

        <div>
            <Link to='/weather'><Arrow /></Link>
            <ForecastData />
        </div>
    )
}