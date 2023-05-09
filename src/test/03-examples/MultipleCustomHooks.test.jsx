import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

jest.mock('../../hooks/useFetch');
// jest.mock('../../hooks/useCounter');

describe('Pruenas en <MultipleCustomHooks />', () => { 

    // const mockIncrement = jest.fn();

    // useCounter.mockReturnValue({
    //     counter: 1,
    //     increment: mockIncrement
    // });

    // beforeEach( () => {
    //     jest.clearAllMocks();
    // })

    test('debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHooks />)

        expect(screen.getAllByText('Loading...'));
        expect(screen.getAllByText('Breaking Bad Quotes'));

        const nexButton = screen.getByRole('button', {name: 'Next quote' });
        expect(nexButton.disabled).toBeTruthy();

        // screen.debug();

     });

     test('debe de mostrar un Quote', () => { 

        useFetch.mockReturnValue({
            data: [{author: 'Paola', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null, 
        });

        render(<MultipleCustomHooks />)
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Paola')).toBeTruthy();

        const nexButton = screen.getByRole('button', {name: 'Next quote' });
        expect(nexButton.disabled).toBeFalsy();

      });

      test('debe de llamar la funcion de incrementar', () => { 

        useFetch.mockReturnValue({
            data: [{ author: 'Paola', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null, 
        });

        render(<MultipleCustomHooks />);
        const nexButton = screen.getByRole('button', {name: 'Next quote' });
        fireEvent.click(nexButton);

        // expect(mockIncrement).toHaveBeenCalled();

       });
 });