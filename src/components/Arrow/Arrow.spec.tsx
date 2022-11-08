import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import { Arrow } from './Arrow';

describe('Arrow component', () => {

    it('should render correctly', () => {

        const { getByLabelText } = render (

            <Arrow />
        );

        expect(getByLabelText(/go back button/i)).toBeInTheDocument();         
    })

    it('should render the background image correctly', () => {

        const { getByLabelText } = render (  

            <Arrow /> 
        );

        const arrow = require('../../assets/images/arrow.png');
        expect(getByLabelText(/go back button/i)).toHaveStyle(`background-image: url(${arrow})`)    
 
    })

})
