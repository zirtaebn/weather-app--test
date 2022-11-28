import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react'
import { renderWithContext } from '../../helpers/testHelpers';
import { ErrorMessage } from './ErrorMessage';


describe('ErrorMessage component', () => {

    it('should render the correct pharse in portuguese if the chosen language is pt', () => {
        const portugueseContext = {
            language: { name: 'pt' },
            address: { lat: '', lng: '' },
            temp: { isToggle: false }
        }

        renderWithContext(<ErrorMessage />, portugueseContext); 

        expect(screen.getByText(/houve um erro/i)).toBeInTheDocument();
        expect(screen.getByText(/verifique a conexão/i)).toBeInTheDocument();
    });

    it('should render the correct phrase in english if the chosen language is en', () => {
        const englishContext = {
            language: { name: 'en' },
            address: { lat: '', lng: '' },
            temp: { isToggle: false }
        }

        renderWithContext(<ErrorMessage />, englishContext)

        expect(screen.getByText(/there's been an error/i)).toBeInTheDocument();
        expect(screen.getByText(/check your connection/i)).toBeInTheDocument();
    });

    it('should render the correct phrase in spanish if the chosen language is es', () => {
        const spanishContext = {
            language: { name: 'es' },
            address: { lat: '', lng: '' },
            temp: { isToggle: false }
        }

        renderWithContext(<ErrorMessage />, spanishContext); 

        expect(screen.getByText(/ha habido un error/i)).toBeInTheDocument()
        expect(screen.getByText(/comprueba tu conexión/i)).toBeInTheDocument()
    })
})
   

