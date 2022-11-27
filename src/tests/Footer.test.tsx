import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { renderWithContext } from '../helpers/testHelpers';


describe('[COMPONENTS]: Footer', () => {
    it('it should render correctly', () => {
        renderWithContext(
          <MemoryRouter>
            <Footer />
          </MemoryRouter>,
        )
    
        expect(screen.getByLabelText('change the language to portuguese')).toMatchSnapshot()
    });
    
    it('it should display footer message in Portuguese', async () => {
        renderWithContext(
            <MemoryRouter>
              <Footer />
            </MemoryRouter>,
          )
          userEvent.click(screen.getByLabelText('change the language to portuguese'))

        expect(await screen.findByText('Idioma selecionado: Português.')).toMatchSnapshot()
    });
    
    it('it should display footer message in English', async () => {
        renderWithContext(
            <MemoryRouter>
              <Footer />
            </MemoryRouter>,
          )

        userEvent.click(screen.getByLabelText('change the language to english'))

        expect(await screen.findByText('Selected language: English.')).toMatchSnapshot()
    });
    
    it('it should display footer message in Spanish', async () => {
        renderWithContext(
            <MemoryRouter>
              <Footer />
            </MemoryRouter>,
          )
          userEvent.click(screen.getByLabelText('change the language to spanish'))

        expect(await screen.findByText('Idioma seleccionado: Español.')).toMatchSnapshot()
    });
})
