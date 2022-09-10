import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Switch } from '../components/Switch/Switch';
import "@testing-library/jest-dom/extend-expect";



it('it should have a "°F" text', () => {

    render (<Switch />);

    expect(screen.getByText('°F')).toBeInTheDocument;
});

it('it should have a input tag', () => {

    const { container } = render (

        <MemoryRouter>
            <Switch />
        </MemoryRouter>
    );

    expect(container.querySelector('input')).toBeInTheDocument;
});

it('the input tag should have checkbox type as attribute', () => {

    const { container } = render (

        <MemoryRouter>
            <Switch />
        </MemoryRouter>
    );

    expect(container.querySelector('input')).toHaveAttribute('type', 'checkbox');
});

it('it should have a "°C" text', () => {

    render (<Switch />);

    expect(screen.getByText('°C')).toBeInTheDocument;
});






export {}