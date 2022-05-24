import React from 'react';
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom"
import LandingPage from "../components/LandingPage.jsx"
import AgendaTurnos from "../components/AgendaTurnos";


const AppRouter = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/home" element={<AgendaTurnos />} />
                    {/* <Route path="/home" element= {<AgendaTurnos/>}/>
          <Route path="/listClient" element={<ListClients/>}/>
          <Route path="/listVentas" element={<ListVentas/>}/>
          <Route path="/Informe" element={<Informe/>}/> */}
                </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
