import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { WeatherData } from '../components/WeatherData';


it('it should have a "weather-data" div', () => {

    const { container } = render (

        <MemoryRouter>
            <WeatherData />
        </MemoryRouter>
    );

    expect(container.getElementsByClassName('weather-data').length).toBe(1);
});

it('it should not have a "weather-data-row" without data', () => {

    const { container } = render (

        <MemoryRouter>
            <WeatherData />
        </MemoryRouter>
    );

    expect(container.getElementsByClassName('weather-data-row').length).toBe(0);
});



export {}