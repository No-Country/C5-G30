import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from "../pages/LogInRegister";
import UserRouter from './UserRouter.js';
import {useSelector} from "react-redux"
import Home from '../pages/Home.jsx';
//import

import HomeRouter from './HomeRouter';



const AppRouter = (store) => {
    const estado = useSelector((state) => state);
    console.log(estado.auth.userGet)
    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path="/*" element={store ? <Navigate to="/login"/> : <HomeRouter />} />
                    <Route path="/login" element={<Login isLogin={true} />} />
                    <Route path="/register" element={<Login isLogin={false} />} />                
                    <Route path='/user/*' element={<UserRouter />} />
                   {/* <Route path='/home' element={<UserRouter />} /> */}
                </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
