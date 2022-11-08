import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { renderWithContext } from '../../helpers/testHelpers';
import { ErrorMessage } from './ErrorMessage';


describe('ErrorMessage component', () => {

    it('should render the correct pharse in portuguese if the chosen language is pt', () => {

        const { getAllByText } = renderWithContext(<ErrorMessage />, {

            state:{
                language:{name:'pt'},
                
            } as any
        }); 

        getAllByText(/houve um erro/i);
        getAllByText(/verifique a conexão/i);  
    });

    it('should render the correct pharse in english if the chosen language is en', () => {

        const { getAllByText } = renderWithContext(<ErrorMessage />, {

            state:{
                language:{name:'en'},
                
            } as any
        });

        getAllByText(/there's been an error/i);
        getAllByText(/check your connection/i);  
    });

    it('should render the correct pharse in spanish if the chosen language is es', () => {

        const { getAllByText } = renderWithContext(<ErrorMessage />, {

            state:{
                language:{name:'es'},
                
            } as any
        });

        getAllByText(/ha habido un error/i);
        getAllByText(/comprueba tu conexión/i);  
    })
})
   

