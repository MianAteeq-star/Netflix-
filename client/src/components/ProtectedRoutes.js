import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  if (!user) {
    // return <Navigate to={'/login'} replace />;   
  }

  return children;
};

export default ProtectedRoutes;