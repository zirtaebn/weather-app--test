import { Context } from '../contexts/Context';
import { OPEN_WEATHER_BASE_URL } from '../utils/openWeatherBaseURL';

import axios from 'axios';
import { useContext } from 'react';
import { useQuery } from 'react-query';

export const useFetch = <T>(queryKey:string):[ T | undefined, boolean, boolean] => {

    const { state } = useContext(Context);
    const URL = `https://api.openweathermap.org/data/2.5/${OPEN_WEATHER_BASE_URL(queryKey)}`;
    const { data, isLoading, isError } = useQuery<T>([queryKey, state], 

        async () => {

            const { data } = await axios.get(URL);

            return data
        },
        {
            refetchOnWindowFocus: false
        }
    )

    return [ data, isLoading, isError ]
}