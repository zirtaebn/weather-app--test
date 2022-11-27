import { render } from '@testing-library/react';

import { IntlContext, initialStateType, IntlContextProvider } from '../contexts/IntlContext';

export const renderWithContext = (ui:React.ReactElement, state?: initialStateType, renderOptions?: any) => {
            
    return render(
        state ? <IntlContext.Provider value={{state} as any}>{ui}</IntlContext.Provider> : <IntlContextProvider>{ui}</IntlContextProvider>,
        renderOptions,
    )
} 