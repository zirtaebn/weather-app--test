import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Arrow } from '../components/Arrow/Arrow';

it('it should have a "back-arrow" div', () => {

    const { container } = render (

        <MemoryRouter>
            <Arrow />
        </MemoryRouter>
    );

    expect(container.getElementsByClassName('back-arrow').length).toBeGreaterThan(0);
})


export {};