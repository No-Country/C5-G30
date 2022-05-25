import React from "react";

const DataUser = () => {
  return (
    <div className="data-user-container">
      <form className="data-form">
        <div className="input-profile">
          <label htmlFor="name">Nombres</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="input-profile">
          <label htmlFor="surname">Apellido</label>
          <input type="text" id="surname" name="surname" />
        </div>
        <div className="input-profile">
          <label htmlFor="DNI">Nº Documento</label>
          <input type="number" id="DNI" name="dni" />
        </div>
        <div className="input-profile">
          <label htmlFor="date">Fecha de Nacimiento</label>
          <input type="date" id="date" name="dateBirth" />
        </div>
        <div className="input-profile">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="input-profile">
          <label htmlFor="country">País</label>
          <input type="text" id="country" name="country" />
        </div>
        <div className="button-container">
          <button id="edit-data-user">Editar</button>
          <button id="submit-data-user" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataUser;
