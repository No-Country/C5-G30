import React from 'react';
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom"
import LandingPage from "../components/LandingPage.jsx"
import AgendaTurnos from "../components/AgendaTurnos";
import Profile from '../pages/Profile.jsx';
import Login from "../components/LogRegister/LogInRegister";


const AppRouter = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/home" element={<AgendaTurnos />} />
                    <Route path="/profile/:id" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/home" element= {<AgendaTurnos/>}/>
          <Route path="/listClient" element={<ListClients/>}/>
          <Route path="/listVentas" element={<ListVentas/>}/>
          <Route path="/Informe" element={<Informe/>}/> */}
                </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
