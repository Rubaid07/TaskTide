import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-318px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;