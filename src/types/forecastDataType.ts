import { weatherDataType } from './weatherDataType';

export type forecastDataType = {

    city: {
        name:string
    },
    list: weatherDataType[]
}
