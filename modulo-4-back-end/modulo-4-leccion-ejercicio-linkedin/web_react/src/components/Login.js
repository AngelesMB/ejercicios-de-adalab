import React, { useState } from "react";

const Login = (props) => {
  // state
  const [email, setEmail] = useState("ivan@adalab.es");
  const [password, setPassword] = useState("12345");

  // events
  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    props.handleLogin({
      email: email,
      pass: password,
    });
  };

  return (
    <>
      <form className="mb-1" onSubmit={handleFormSubmit}>
        <h2>Bienvenida a nuestra LinkedIn</h2>
        <h3>Identifícate por favor</h3>
        <label className="form__label display-block" htmlFor="email">
          Escribe tu email:
        </label>
        <input
          className="form__input-text m-0"
          type="text"
          id="email"
          value={email}
          onChange={handleEmail}
        />
        <label className="form__label display-block" htmlFor="password">
          Escribe tu contraseña:
        </label>
        <input
          className="form__input-text m-0"
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <button className="card__btn m-0 mt-1">Entrar</button>
        {props.loginError}
      </form>
    </>
  );
};

export default Login;
