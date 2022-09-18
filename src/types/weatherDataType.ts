export type weatherDataType = {

    name?:string,
    dt_txt:string,
    weather: [
        {
            description:string,
            icon:string
        }
    ],
    main: {

        temp?:number,
        temp_max:number,
        temp_min:number
    }
}

