import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../components/Load/Loader';
import ProfileWrapper from '../components/Profile/ProfileWrapper';
import '../styles/Profile.css'

const Profile = () => {
    const [dataUser, setDataUser] = useState();

    const apiCall = ()=>{
        
    }

    useEffect(() => {
        setDataUser([1,2])
    }, []);
    
    console.log(dataUser)
    return (
        <main className='profile-container'>
            {
                dataUser ? <ProfileWrapper /> : <Loader />
            }
           
        </main>
    );
}

export default Profile;
