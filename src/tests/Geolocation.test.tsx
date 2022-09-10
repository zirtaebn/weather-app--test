import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Geolocation } from '../components/Geolocation/Geolocation';


it('it should have a "geo" div', () => {

    const { container } = render (

        <MemoryRouter>
            <Geolocation />
        </MemoryRouter>
    );

    expect(container.getElementsByClassName('geo').length).toBe(1);
});




export {}