// src/provider/PrivateRoute.jsx
import React, {  useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../component/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={location.pathname}/>
};

export default PrivateRoute;