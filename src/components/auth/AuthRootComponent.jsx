import React from "react";
import { LoginPage } from "./login/LoginPage";
import { RegisterPage } from "./register/RegisterPage";
import { useLocation } from "react-router-dom";

export const AuthRootComponent = () => {
  const location = useLocation();
  return location.pathname === "/login" ? (
    <LoginPage />
  ) : location.pathname === "/register" ? (
    <RegisterPage />
  ) : null;
};

export default AuthRootComponent;
