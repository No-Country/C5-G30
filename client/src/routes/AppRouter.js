import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
<<<<<<< HEAD
import Login from "../pages/LogInRegister";
import UserRouter from './UserRouter.js';
import DetailsMateria from "../components/DetailsMateria"
=======
import { useSelector } from 'react-redux'

import Login from "../pages/LogInRegister";
import HomeRouter from './HomeRouter';

>>>>>>> cedaeae088394c7c5d706fca3c5b032a69342c3f


const AppRouter = (store) => {
    const estado = useSelector((state) => state);
    console.log(estado.auth.userGet)
    return (
        <BrowserRouter>
                <Routes>
<<<<<<< HEAD
                    <Route exact path="/" element={!store ? <Navigate to="/login"/> : <Navigate to="/user/profile/"/>} />
                    <Route path="/login" element={<Login isLogin={true} />} />
                    <Route path="/register" element={<Login isLogin={false} />} />                
                    <Route path='/user/*' element={<UserRouter />} />
                    <Route path="/detailsMat" element={<DetailsMateria/>}/>
=======
                    <Route exact path="/*" element={!estado.auth.email ? <Navigate to="/login"/> : <HomeRouter />} />
                    <Route path="/login" element={estado.auth.email ? <Navigate to="/"/> : <Login isLogin={true} />} />
                    <Route path="/register" element={estado.auth.email ? <Navigate to="/"/> : <Login isLogin={false} />} />                
>>>>>>> cedaeae088394c7c5d706fca3c5b032a69342c3f
                </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
