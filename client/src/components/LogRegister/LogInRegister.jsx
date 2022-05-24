import React, { useState } from "react";
import "./Log.css";

export default ({ isLogin }) => {
  const [form, SetForm] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const HandleError = () => {
    let error = [];
    if (form.email === "") error.push("El mail no puede estar vacio");
    if (!form.password) error.push("La contraseña no puede estar vacia");
    else if (form.password !== form.password2)
      error.push("Las contraseñas no coinciden");
    else if (form.password.length < 8)
      error.push("La contraseña debe tener al menos 8 caracteres");
    else if (form.password.length > 16)
      error.push("La contraseña no debe tener mas de 16 caracteres");
    return error;
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      let temp = HandleError();
      if (temp.length > 0) {
        alert(temp.map((e) => e + "\n"));
      } else {
        alert(
          `Nuevo usuario creado\nMail: ${form.email}\nPassword: ${form.password}\nPassword2: ${form.password2}`
        );
        SetForm({
          email: "",
          password: "",
          password2: "",
        });
      }
    } else alert("Iniciando sesion");
  };

  const HandleChange = (e) => {
    e.preventDefault();
    SetForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div id="login-background">
      <form id="login-body">
        <h2>{isLogin ? "Ingresa" : "Registrate"}</h2>
        <div id="log-input-field-holder">
          <h6>Email</h6>
          <input
            type="text"
            id="log-input-field"
            name="email"
            value={form.email}
            onChange={(e) => HandleChange(e)}
          />
        </div>
        <div id="log-input-field-holder">
          <h6>Contraseña</h6>
          <input
            type="password"
            id="log-input-field"
            name="password"
            value={form.password}
            onChange={(e) => HandleChange(e)}
          />
        </div>
        {!isLogin ? (
          <div id="log-input-field-holder">
            <h6>Confirmar contraseña</h6>
            <input
              type="password"
              id="log-input-field"
              name="password2"
              value={form.password2}
              onChange={(e) => HandleChange(e)}
            />
          </div>
        ) : (
          ""
        )}
        <input
          type="submit"
          value={isLogin ? "Iniciar sesion" : "Registrate"}
          onClick={(e) => HandleSubmit(e)}
          id="log-input-button"
        ></input>
        <a href="#">{isLogin ? "¿Olvidaste tu contraseña?" : ""}</a>
      </form>
    </div>
  );
};
