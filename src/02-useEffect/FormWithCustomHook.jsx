import React from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const { onInputChange, username, email, password, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

// const {username, email, password} = formState;


  return (
    <div>
      <h1>Form with Custom Hook</h1>
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
      value={email}
      onChange={onInputChange}
      ></input>

<input 
      type="password"
      className="form-control mt-2"
      placeholder="Contraseña"
      name="password"
      value={password}
      onChange={onInputChange}
      ></input>

<button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

    </div>
  );
};
