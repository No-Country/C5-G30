import React from 'react';
import '../styles/Profile.css'

const Profile = () => {
    return (
        <main className='profile-container'>
            <h2>Perfil</h2>

            <div className='avatar-container'>
                <div className='image-avatar-contain'>
                    <img src="/web-developer-design-vector-5884837.jpg" alt="foto de perfil" />
                </div>
                <form className='form-avatar'>
                    <label htmlFor='avatar' >Cambiar Foto</label>
                    <input id='avatar' type="file"/>
                    <button type='submit'>Cambiar foto</button>
                </form>
            </div>

            <h2>Datos Personales</h2>
            <div className='data-user-container'>
                <form className='data-form'>
                    <div className='input-profile'>
                        <label htmlFor='name'>Nombres</label>
                        <input type="text" id='name' name='name' />
                    </div>
                    <div className='input-profile'>
                        <label htmlFor='surname'>Apellido</label>
                        <input type="text" id='surname' name='surname' />
                    </div>
                    <div className='input-profile'>
                        <label htmlFor='DNI'>Nº Documento</label>
                        <input type="number" id='DNI' name='dni'/>
                    </div>
                    <div className='input-profile'>
                        <label htmlFor='date'>Fecha de Nacimiento</label>
                        <input type="date" id='date' name='dateBirth'/>
                    </div>
                    <div className='input-profile'>
                        <label htmlFor='email'>Email</label>
                        <input type="text" id='email' name='email'/>
                    </div>
                    <div className='input-profile'>
                        <label htmlFor='country'>País</label>
                        <input type="text" id='country' name='country'/>
                    </div>
                    <div className='button-container'>
                        <button id='edit-data-user'>Editar</button>
                        <button id='submit-data-user' type='submit'>Guardar</button>
                    </div>
                </form>
            </div>

            <h2>Cambiar Contraseña</h2>

            <div className='form-password'>
                <form className='password-form'>
                    <div className='input-password'>
                        <label htmlFor='actually'>Contraseña Actual</label>
                        <input type="password" id='actually' name='password' />
                    </div>
                    <div className='input-password' >
                        <label htmlFor='new'>Nueva Contraseña</label>
                        <input type="password" id='new' name='newPassword' />
                    </div>
                    <div className='input-password'>
                        <label htmlFor='re-password'>Repetir Contraseña</label>
                        <input type="password" id='re-password' name='rePassword'/>
                    </div>
                    <div className='button-container'>
                        <button id='edit-password-user'>Editar</button>
                        <button id='submit-password-user' type='submit'>Guardar</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Profile;
