import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRootComponent from "./components/auth/AuthRootComponent";
import Home from "./components/home/Home";
import PrivateRoute from "./utils/PrivateRoute";
import "./index.css";

export const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<AuthRootComponent />} />
      <Route path="/register" element={<AuthRootComponent />} />
    </Routes>
  );
};

export default App;
