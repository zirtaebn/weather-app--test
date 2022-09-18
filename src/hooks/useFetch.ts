import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";

import { Context } from "../contexts/Context";
import { weatherDataType } from "../types/weatherDataType";
import { OPEN_WEATHER_BASE_URL } from "../utils/openWeatherBaseURL";



export const useFetch = (queryKey:string) => {

    const { state } = useContext(Context);
    const URL = OPEN_WEATHER_BASE_URL(queryKey);

    const { data, isLoading, isError } = useQuery<weatherDataType | undefined>([queryKey, state], 

        async () => {

            const { data } = await axios.get(URL);

            return data
        },
        {
            refetchOnWindowFocus: false
        }
    )

    return { data, isLoading, isError }
}