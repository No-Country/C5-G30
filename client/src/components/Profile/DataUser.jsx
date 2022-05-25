import React from "react";

const DataUser = () => {

  const inputsDisabled = ()=>{
    let $input = document.querySelectorAll('input')
    $input.forEach((a, i)=>{
      if (i > 7 ) {
        return
      }
      a.disabled = false
    })
    document.querySelector('#edit-data-user').style.display = 'none'
    document.querySelector('#submit-data-user').style.display = 'block'
  
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (e.target.id === "edit-data-user") {
      inputsDisabled()
    }
    
  }
  return (
    <div className="data-user-container">
      <form action="" method="POST" className="data-form" onClick={handleSubmit}>
        <div className="input-profile">
          <label htmlFor="name">Nombres</label>
          <input type="text" id="name" name="name" disabled />
        </div>
        <div className="input-profile">
          <label htmlFor="surname">Apellido</label>
          <input type="text" id="surname" name="surname" disabled  />
        </div>
        <div className="input-profile">
          <label htmlFor="DNI">Nº Documento</label>
          <input type="number" id="DNI" name="dni" disabled  />
        </div>
        <div className="input-profile">
          <label htmlFor="date">Fecha de Nacimiento</label>
          <input type="date" id="date" name="dateBirth" disabled  />
        </div>
        <div className="input-profile">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" disabled />
        </div>
        <div className="input-profile">
          <label htmlFor="country">País</label>
          <input type="text" id="country" name="country" disabled />
        </div>
        <div className="input-profile">
          <label htmlFor="province">Provincia</label>
          <input type="text" id="province" name="province" disabled />
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
