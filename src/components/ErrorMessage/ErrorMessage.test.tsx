import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { renderWithContext } from '../../helpers/testHelpers';
import { ErrorMessage } from './ErrorMessage';


describe('ErrorMessage component', () => {

    it('should render the correct pharse in portuguese if the chosen language is pt', () => {

        const { getByText } = renderWithContext(<ErrorMessage />, {

            state:{
                language:{name:'pt'},
                
            } as any
        }); 

        getByText(/houve um erro/i);
        getByText(/verifique a conexão/i);  
    });

    it('should render the correct pharse in english if the chosen language is en', () => {

        const { getByText } = renderWithContext(<ErrorMessage />, {

            state:{
                language:{name:'en'},
                
            } as any
        });

        getByText(/there's been an error/i);
        getByText(/check your connection/i);  
    });

    it('should render the correct pharse in spanish if the chosen language is es', () => {

        const { getByText } = renderWithContext(<ErrorMessage />, {

            state:{
                language:{name:'es'},
                
            } as any
        });

        getByText(/ha habido un error/i);
        getByText(/comprueba tu conexión/i);  
    })
})
   

