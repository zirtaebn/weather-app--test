import { useEffect } from 'react';

export const usePersistedData = (key:string, initialState:any) => {

    useEffect(() => {

        localStorage.setItem(key, initialState);

    },[key,initialState]);


    const storageValue = localStorage.getItem(key);

    if(storageValue) {

        return storageValue;

    } else {

        return initialState
    }

}