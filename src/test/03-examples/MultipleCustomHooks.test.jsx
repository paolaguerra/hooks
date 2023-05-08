import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";

describe('Pruenas en <MultipleCustomHooks />', () => { 

    test('debe de mostrar el componente por defecto', () => { 

        render(<MultipleCustomHooks />)

        expect(screen.getAllByText('Loading...'));
        expect(screen.getAllByText('Breaking Bad Quotes'));

        const nexButton = screen.getByRole('button', {name: 'Next quote' });
        expect(nexButton.disabled).toBeTruthy();

        // screen.debug();

     });

 });