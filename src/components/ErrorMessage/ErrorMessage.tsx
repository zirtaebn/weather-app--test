import { Context } from '../../contexts/Context';
import { useLanguageString } from '../../hooks/useLanguageString';

import { useContext } from 'react';

export const ErrorMessage = () => {

    const { state } = useContext(Context);
    const { errorMessage, subErrorMessage } = useLanguageString(state);

    return (

        <>
            <h1>{errorMessage}</h1>
            <h2>{subErrorMessage}</h2>
        </>
    )
}