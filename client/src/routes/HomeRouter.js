import React from 'react';
import { Routes, Route } from 'react-router-dom';
import List from '../components/List/List.jsx';
import SideBar from '../components/SideBar.jsx';
import AddSubjects from '../components/subjects/addSubjects.jsx';
import Topbar from '../components/topbar.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import UserRouter from './UserRouter.js';
const HomeRouter = () => {
    return (
        <>
            <Topbar />
            {/* <SideBar /> */}
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/subjects' element={<List />} />
                <Route path='/subjects/add' element={<AddSubjects />} />
                <Route path='/user/*' element={<UserRouter />} />
            </Routes>
        </>

    );
}

export default HomeRouter;
