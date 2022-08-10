import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Search } from '../components/Search';
import "@testing-library/jest-dom/extend-expect";


it('it should have a "h1" tag', () => {

    const { container } = render (

        <MemoryRouter>
            <Search />
        </MemoryRouter>
    );

    expect(container.querySelector('h1')).toBeInTheDocument;
});

it('it should have a "input" tag', () => {

    const { container } = render (

        <MemoryRouter>
            <Search />
        </MemoryRouter>
    );

    expect(container.querySelector('input')).toBeInTheDocument;
});


it('it should have a placeholder', () => {

    const { container } = render (

        <MemoryRouter>
            <Search />
        </MemoryRouter>
    );

    expect(container.querySelector('input')).toHaveAttribute('placeholder');
});



export {}