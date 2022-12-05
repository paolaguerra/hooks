import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Paola Guerra',
//     email: 'paola@gmail.com'
// }

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{ Hola: 'Mundo', user: user}}>
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}

