import { IntlContext } from '../../contexts/IntlContext';
import { useLanguageString } from '../../hooks/useLanguageString';

import { useContext } from 'react';

export const ErrorMessage = () => {

    const { state } = useContext(IntlContext);
    const { errorMessage, subErrorMessage } = useLanguageString(state);

    return (

        <>
            <h1>{errorMessage}</h1>
            <h2>{subErrorMessage}</h2>
        </>
    )
}