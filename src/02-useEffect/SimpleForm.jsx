import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Ahsoka',
        email: 'ahsoka@clonewars.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
    //  console.log('useEffect called!');
    }, []);

    useEffect(() => {
    //    console.log('formState changed!');
      }, [formState]);

      useEffect(() => {
    //    console.log('email changed!');
      }, [email]);


  return (
    <div>
      <h1>Simple Form</h1>
      <hr />

      <input 
      type="text"
      className="form-control"
      placeholder="Username"
      name="username"
      value={username}
      onChange={onInputChange}
      ></input>

<input 
      type="email"
      className="form-control mt-2"
      placeholder="paola@react.com"
      name="email"
      value={"email"}
      onChange={onInputChange}
      ></input>

      {
        (
            username === 'Ahsoka2'
        ) && <Message></Message>
      }

    </div>
  );
};
