import React from 'react';
import { useEffect, useState  } from 'react';
import { useParams } from 'react-router-dom'
import Loader from '../components/Load/Loader';
import ProfileWrapper from '../components/Profile/ProfileWrapper';
import UseFetch from '../hooks/useFetch';
import '../styles/Profile.css'

const Profile = () => {
    const [dataUser, setDataUser] = useState();
    let idParams = useParams()
    let apiCall = async (setState, id)=>{
        let resolve = await UseFetch(`http://localhost:8080/api/getTeacher/${id.id}`)
        if(resolve.status === 200){
            setState(resolve.data)
        }
        
    }

    useEffect(() => {
        apiCall(setDataUser, idParams)
        
    }, []);
    
    return (
        <main className='profile-container'>
            {
                dataUser ? <ProfileWrapper dataUser={dataUser} /> : <Loader />
            }
           
        </main>
    );
}

export default Profile;
