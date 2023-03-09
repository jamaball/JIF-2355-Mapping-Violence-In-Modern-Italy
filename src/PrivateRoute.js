import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const { isLoading, isAuthenticated } = useSelector((state) => state.auth)
    if (isLoading) {
        return <h2>Loading...</h2>;
    } else if (!isAuthenticated) {
        return <Navigate to="/LoginPage"/>;
    } else {
        return children;
    }
}


export default PrivateRoute;