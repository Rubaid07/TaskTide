// src/layouts/MainLayouts.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../component/Footer';
import Loading from '../component/Loading';
import ScrollToTop from '../component/ScrollToTop';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../provider/AuthProvider';

const MainLayouts = () => {
    const navigation = useNavigation()
    const [authChecking, setAuthChecking] = useState(true);
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, () => {
            setAuthChecking(false);
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        if (navigation.state === 'idle') {
            window.scrollTo(0, 0);
        }
    }, [navigation.state]);
    
     if (authChecking || navigation.state === "loading") {
        return <Loading />;
    }
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-286px)] md:w-10/12 mx-auto">
                {
                    navigation.state === "loading"? <Loading></Loading>: <Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;