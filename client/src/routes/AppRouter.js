import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from "../pages/LogInRegister";
import UserRouter from './UserRouter.js';
import DetailsMateria from "../components/DetailsMateria"

const AppRouter = ({store}) => {
    

    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={!store ? <Navigate to="/login"/> : <Navigate to="/user/profile/"/>} />
                    <Route path="/login" element={<Login isLogin={true} />} />
                    <Route path="/register" element={<Login isLogin={false} />} />                
                    <Route path='/user/*' element={<UserRouter />} />
                    <Route path="/detailsMat" element={<DetailsMateria/>}/>
                </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
