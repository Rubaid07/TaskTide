import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../component/Footer';
import Loading from '../component/Loading';

const MainLayouts = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-318px)] md:w-10/12 mx-auto">
                {
                    navigation.state === "loading"? <Loading></Loading>: <Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;