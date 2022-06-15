import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import "../styles/Log.css";
import { useDispatch, useSelector } from 'react-redux'
import { startLogin } from '../actions/authLogin'
import UseFetchPost from "../hooks/useFetchPost";
import host from "../helpers/host"

export default function LoginInRegister({ isLogin }) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, SetForm] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const estado = useSelector((state) => state);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    let keyword ={
      username : e.target[0].value,
      password : e.target[1].value
    }
    if (isLogin) {
      let data = await UseFetchPost(`${host.development}/stu/login`, keyword)
      if(data.status === 200){
        dispatch(startLogin(data.data))
        navigate('/')
      }
        
    } else{
      let data = await UseFetchPost(`${host.development}/stu/register`, keyword)
      if(data.status === 200){
        navigate('/login')
      }
    }
    
  };

  const HandleChange = (e) => {
    e.preventDefault();
    SetForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div id="login-background">
      <form id="login-body" onSubmit={HandleSubmit}>
        <h2>{isLogin ? "Ingresa" : "Registrate"}</h2>
        <div className="input-contain-login">
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
        </div>

        <input
          type="submit"
          value={isLogin ? "Iniciar sesion" : "Registrate"}
          id="log-input-button"
        ></input>
        <div className="link-container-register-login">
          <Link to={isLogin ? "/register" : "/login"}>
            {isLogin
              ? "No tienes cuenta? Registrate"
              : "Tienes Cuenta? Inicia Sesión"}
          </Link>
          <a href="/">{isLogin ? "¿Olvidaste tu contraseña?" : ""}</a>
        </div>
      </form>
    </div>
  );
}
