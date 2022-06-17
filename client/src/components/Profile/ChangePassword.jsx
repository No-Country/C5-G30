import React from "react";
import UseFetchPost from "../../hooks/useFetchPost";
import host from "../../helpers/host";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ValidateChangePassword,
  validatePasswords,
} from "../../helpers/validatorForm";
import { getStudent } from "../../reducer/actions";


const ChangePassword = ({id, email}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Form, setForm] = useState({
    password: "",
    newPassword: "",
    rePassword: "",
  });

  const [Errors, setErrors] = useState({
    errPass: "",
    errNewPass: "",
    errRePass: "",
    resErr: "",
  });

  const [ExistError, setExistError] = useState([false, false, false, false]);

  const handleBlur = (e) => {
    ValidateChangePassword(
      e.target,
      Errors,
      setErrors,
      ExistError,
      setExistError
    );
    let name = e.target.name;
    setForm({
      ...Form,
      [name]: e.target.value,
    });
  };

  const inputsDisabledPassowrd = () => {
    let $input = document.querySelectorAll("input");
    $input.forEach((a, i) => {
      if (i < 8) {
        return;
      }
      a.disabled = false;
    });
    document.querySelector("#edit-password-user").style.display = "none";
    document.querySelector("#submit-password-user").style.display = "block";
  };

  const inputsDisabledOn = () => {
    let $input = document.querySelectorAll("input");
    $input.forEach((a, i) => {
      if (i < 8) {
        return;
      }
      a.disabled = true;
    });
    document.querySelector("#edit-password-user").style.display = "block";
    document.querySelector("#submit-password-user").style.display = "none";
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === "edit-password-user") {
      return inputsDisabledPassowrd();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validatePasswords(Form, Errors, setErrors, ExistError, setExistError);
    let valuesObj = Object.values(Form);
    if (ExistError.includes(true) || valuesObj.includes("")) {
      setErrors({
        ...Errors,
        resErr: "Complete todos los campos",
      });
      // navigate(`/user/profile/${id}`);
      return;
    }

    let values ={
        username : email,
        username2 : email,
        password : Form.password,
        password2 : Form.newPassword
    }
    apiPut(values)
};
const apiPut = async (values) => {
  let resolve = await UseFetchPost(
    `${host.development}/stu/editUser/${id}`,
    values,
    "put"
  );
  console.log(resolve)
  if (resolve.data === "estudiante actualizado") {
    Swal.fire({
      icon: "success",
      title: `Datos actualizados correctamente`,
      showConfirmButton: false,
      timer: 1500,
    });
    inputsDisabledOn();
    dispatch(getStudent(values));
  }
};

  return (
    <div className="form-password">
      <form className="password-form" onSubmit={handleSubmit}>
        <div className="input-password">
          <label htmlFor="actually">Contraseña Actual</label>
          <input
            type="password"
            className={`${Errors.errPass.length > 0 ? "invalid" : ""}`}
            id="actually"
            name="password"
            onBlur={handleBlur}
            disabled
          />
          <span className="danger-msg">{Errors.errPass}</span>
        </div>
        <div className="input-password">
          <label htmlFor="new">Nueva Contraseña</label>
          <input
            type="password"
            id="new"
            className={`${Errors.errNewPass.length > 0 ? "invalid" : ""}`}
            onBlur={handleBlur}
            name="newPassword"
            disabled
          />
          <span className="danger-msg">{Errors.errNewPass}</span>
        </div>
        <div className="input-password">
          <label htmlFor="re-password">Repetir Contraseña</label>
          <input
            type="password"
            id="re-password"
            className={`${Errors.errRePass.length > 0 ? "invalid" : ""}`}
            onBlur={handleBlur}
            name="rePassword"
            disabled
          />
          <span className="danger-msg">{Errors.errRePass}</span>
        </div>
        <div className="button-container">
          <span className="danger-msg">{Errors.resErr}</span>
          <button id="edit-password-user" onClick={handleClick}>
            Editar
          </button>
          <button id="submit-password-user" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
