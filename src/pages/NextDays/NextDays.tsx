import { Arrow } from '../../components/Arrow/Arrow';
import { NextDaysData } from '../../components/NextDaysData/NextDaysData';
import { Link } from 'react-router-dom';

export const NextDays = () => {

    return(

        <div>
            <Link to='/weather'><Arrow /></Link>
            <NextDaysData />
        </div>
    )
}