import React from "react";
import useAdmin from "../../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const AdminRoute = ({children}) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [isAdmin,isAdminLoading] = useAdmin(user?.email);

  if(isAdminLoading){
    return <Loading></Loading>
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
