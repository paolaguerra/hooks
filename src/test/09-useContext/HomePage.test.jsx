const { render, screen } = require("@testing-library/react");
const { HomePage } = require("../../09-useContext/HomePage");
const { UserContext } = require("../../09-useContext/context/UserContext");

describe('Pruebas en <HomePage />', () => { 

    const user = {
        id: 1,
        name: 'Olivia'
    }

    test('debe de mostrar el componente sin el usuario', () => { 

        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

        //screen.debug();

     });

     test('debe de mostrar el componente CON el usuario', () => { 

        render(
            <UserContext.Provider value={{ user: user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());
        
      });
    
 });