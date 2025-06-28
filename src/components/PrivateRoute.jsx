// components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "./layout";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? <Layout>{children}</Layout> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
