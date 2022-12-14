import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ForecastData } from '../components/ForecastData/ForecastData';


it('it should have a "next-days-data" div', () => {

    const { container } = render (

        <MemoryRouter>
            <ForecastData />
        </MemoryRouter>
    );

    expect(container.getElementsByClassName('next-days-data').length).toBe(1);
});

it('it should not have a "next-days-data-row" without data', () => {

    const { container } = render (

        <MemoryRouter>
            <ForecastData />
        </MemoryRouter>
    );

    expect(container.getElementsByClassName('next-days-data-row').length).toBe(0);
});



export {}