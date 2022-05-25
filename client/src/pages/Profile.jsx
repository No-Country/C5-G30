import React from 'react';
import Avatar from '../components/Profile/Avatar';
import ChangePassword from '../components/Profile/ChangePassword';
import DataUser from '../components/Profile/DataUser';
import '../styles/Profile.css'

const Profile = () => {
    return (
        <main className='profile-container'>
            <h2>Perfil</h2>

            <Avatar />

            <h2>Datos Personales</h2>
            <DataUser />

            <h2>Cambiar Contraseña</h2>
            <ChangePassword />
           
        </main>
    );
}

export default Profile;
