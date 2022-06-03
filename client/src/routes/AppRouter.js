import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from "../pages/LogInRegister";
import UserRouter from './UserRouter.js';


import HomeRouter from './HomeRouter';



const AppRouter = ({store}) => {
    

    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path="/*" element={store ? <Navigate to="/login"/> : <HomeRouter />} />
                    <Route path="/login" element={<Login isLogin={true} />} />
                    <Route path="/register" element={<Login isLogin={false} />} />                
                    {/* <Route path='/user/*' element={<UserRouter />} /> */}
                </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
