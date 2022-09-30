import { useLanguageString } from "../../hooks/useLanguageString";

export const ErrorMessage = () => {

    const { errorMessage, subErrorMessage } = useLanguageString();

    return (

        <>
            <h1>{errorMessage}</h1>
            <h2>{subErrorMessage}</h2>
        </>
    )
}