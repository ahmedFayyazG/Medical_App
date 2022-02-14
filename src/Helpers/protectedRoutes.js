import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.Login);
  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
