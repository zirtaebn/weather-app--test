import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from '../components/Footer';


it('it should have a "languages" div', () => {

    const { container } = render (

        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );

    expect(container.getElementsByClassName('languages').length).toBe(1);
});

it('it should have a "pt" div', () => {

    const { container } = render (

        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );

    expect(container.getElementsByClassName('pt').length).toBe(1);
});

it('it should have a "en" div', () => {

    const { container } = render (

        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );

    expect(container.getElementsByClassName('en').length).toBe(1);
});

it('it should have a "es" div', () => {

    const { container } = render (

        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );

    expect(container.getElementsByClassName('es').length).toBe(1);
});


it('it should have a "p" tag', () => {

    const { container } = render (

        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );

    expect(container.querySelector('p')).toBeInTheDocument;
});


export {};