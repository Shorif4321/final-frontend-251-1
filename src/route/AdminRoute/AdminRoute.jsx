import React from 'react';
import useAdmin from '../../hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const AdminRoute = () => {
    const {user}= useContext(AuthContext)
    useAdmin(user.email)
    return (
        <div>
            
        </div>
    );
};

export default AdminRoute;