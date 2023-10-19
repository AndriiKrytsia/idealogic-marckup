import { Route, Routes } from "react";
import AuthRootComponent from "./components/auth/AuthRootComponent";
import Home from "./components/home/Home";
import { PrivateRoute } from "./utils/router/privateRoute";

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
