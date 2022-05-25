import React from "react";

const ChangePassword = () => {
  return (
    <div className="form-password">
      <form className="password-form">
        <div className="input-password">
          <label htmlFor="actually">Contraseña Actual</label>
          <input type="password" id="actually" name="password" />
        </div>
        <div className="input-password">
          <label htmlFor="new">Nueva Contraseña</label>
          <input type="password" id="new" name="newPassword" />
        </div>
        <div className="input-password">
          <label htmlFor="re-password">Repetir Contraseña</label>
          <input type="password" id="re-password" name="rePassword" />
        </div>
        <div className="button-container">
          <button id="edit-password-user">Editar</button>
          <button id="submit-password-user" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
