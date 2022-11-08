import { render } from '@testing-library/react';

import { IntlContext, initialStateType } from '../contexts/IntlContext';

export const renderWithContext = (ui:React.ReactElement, {state, ...renderOptions}: {state:initialStateType}) => {
            
    return render(
        <IntlContext.Provider value={{state} as any}>{ui}</IntlContext.Provider>,
        renderOptions,
    )
} 