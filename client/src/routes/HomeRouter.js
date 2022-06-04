import React from 'react';
import { Routes, Route } from 'react-router-dom';
import List from '../components/List/List.jsx';
import NavBar from '../components/NavBar/NavBar.jsx';
import AddSubjects from '../components/subjects/addSubjects.jsx';
import Home from '../pages/Home.jsx';
import UserRouter from './UserRouter.js';
import DetailsMateria from "../components/DetailsMateria"

const HomeRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/subjects' element={<List />} />
                <Route path='/subjects/add' element={<AddSubjects />} />
                <Route path='/user/*' element={<UserRouter />} />
                <Route path="/detailsMat" element={<DetailsMateria/>}/>
            </Routes>
        </>

    );
}

export default HomeRouter;
