import React from "react";
import Avatar from './Avatar';
import ChangePassword from './ChangePassword';
import DataUser from './DataUser';
const ProfileWrapper = ({dataUser, email, id}) => {
  return (
    <>
      <h2>Perfil</h2>
      <Avatar />

      <h2>Datos Personales</h2>
      <DataUser data={dataUser} email={email} id={id}/>

      <h2>Cambiar Contraseña</h2>
      <ChangePassword id={id} email={email}/>
    </>
  );
};

export default ProfileWrapper;
