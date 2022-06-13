import React from "react";

const Avatar = () => {
  const handleChange = () => {
    let $img = document.querySelector("#image-avatar");
    let $inputFile = document.querySelector("#avatar");
    let button = document.querySelector('button')
    const archivos = $inputFile.files;
    if (!archivos || !archivos.length) {
      $img.src = "";
      return;
    }
    const primerArchivo = archivos[0];
    const objectURL = URL.createObjectURL(primerArchivo);
    $img.src = objectURL;
    button.style.display = "block"

  };

  return (
    <div className="avatar-container">
      <div className="image-avatar-contain">
        <img
          src="/web-developer-design-vector-5884837.jpg"
          alt="foto de perfil"
          id="image-avatar"
        />
      </div>
      <form className="form-avatar">
        <label htmlFor="avatar">Cambiar foto</label>
        <input id="avatar" type="file" name="avatar" onChange={handleChange} />
        <button type="submit" className="btn">Guardar</button>
      </form>
    </div>
  );
};

export default Avatar;
