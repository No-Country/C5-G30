import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
<<<<<<< HEAD
=======
import { useSelector } from 'react-redux'

>>>>>>> c4ae11cab796b5bd558f1b498bcf1e4bc5b03c9f
import Login from "../pages/LogInRegister";
import UserRouter from './UserRouter.js';


import HomeRouter from './HomeRouter';



const AppRouter = (store) => {
    const estado = useSelector((state) => state);
    console.log(estado.auth.userGet)
    return (
        <BrowserRouter>
                <Routes>
<<<<<<< HEAD
                    <Route exact path="/*" element={store ? <Navigate to="/login"/> : <HomeRouter />} />
                    <Route path="/login" element={<Login isLogin={true} />} />
                    <Route path="/register" element={<Login isLogin={false} />} />                
                    {/* <Route path='/user/*' element={<UserRouter />} /> */}
=======
                    <Route exact path="/*" element={!estado.auth.email ? <Navigate to="/login"/> : <HomeRouter />} />
                    <Route path="/login" element={estado.auth.email ? <Navigate to="/"/> : <Login isLogin={true} />} />
                    <Route path="/register" element={estado.auth.email ? <Navigate to="/"/> : <Login isLogin={false} />} />                
>>>>>>> c4ae11cab796b5bd558f1b498bcf1e4bc5b03c9f
                </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
