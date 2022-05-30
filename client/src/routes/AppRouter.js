import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "../components/LandingPage.jsx"
import AgendaTurnos from "../components/AgendaTurnos";

import Login from "../components/LogRegister/LogInRegister";
import UserRouter from './UserRouter.js';


const AppRouter = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login isLogin={true} />} />
                    <Route path="/register" element={<Login isLogin={false} />} />
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/home" element={<AgendaTurnos />} />
                    
                    <Route path='/user/*' element={<UserRouter />} />
                </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
