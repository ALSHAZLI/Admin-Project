import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
var isLoggedIn = localStorage.getItem("zxcv.user.token");
    const ProtectedRoutes = ({isLoggedIn}) => {
    
        return (isLoggedIn === true ? <Outlet /> : <Navigate to="/home" replace/>)
      }
      


export default ProtectedRoutes;