import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(!user){
        return <Navigate state={{from : location}} to="/login" replace></Navigate>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from : location}} to="/login" replace></Navigate>
};

export default PrivateRoute;