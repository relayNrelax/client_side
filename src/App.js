import React from "react";
// import Home from "./pages/Home";
import Auth from "./components/Auth";
import GlobalStyle from "./global-styles";
import AdminLogIn from "./Admin/AdminLogIn";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import { getToken } from "./services/localStorage";
import AdminDashboard from "./Admin/AdminDashboard";
import Dashboard from "./components/Dashboard/Dashboard";
import ResetPass from "./components/ResetPassword/ResetPass";
import NewPassword from "./components/ResetPassword/NewPassword";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import IndexHomeNew from "./IndexPage/IndexHomeNew";

import "./app.css";
import Index from "./Index/Index";
import NavbarNew from "./components/Navbar/NavbarNew";
import VechiclesDetails from "./components/Vehicles/VechiclesDetails";
import AddVehicle from "./components/Vehicles/AddVehicle";
import EditVehicle from "./components/Vehicles/EditVehicle";

function App() {
  const [token, setToken] = useState(() => getToken());
  useEffect(() => {
    const newToken = getToken();
    if (newToken) {
      setToken(newToken);
    }
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavbarNew />
      <div style={{ minHeight: "70vh" }}>
        <Routes>
          <Route
            path="/"
            exact
            // element={!token ? <Home /> : <Navigate to="/dashboard" />}
            element={!token ? <Index /> : <Navigate to="/dashboard" />}
          />
          <Route path="/register" exact element={<Auth mode="signup-mode" />} />
          <Route path="/login" exact element={<Auth mode="" />} />
          <Route path="/reset/password/" exact element={<ResetPass />} />
          <Route path={"/new/password/:id?"} exact element={<NewPassword />} />
          <Route path={"/raincoat/entry"} exact element={<AdminLogIn />} />
          <Route path={"/raincoat/dashboard"} exact element={<AdminDashboard />} />
          <Route path="/dashboard" element={<IndexHomeNew />} />
          <Route path="/alerts" element={<Dashboard />} />
          <Route path={"/edit/:v_id?"} element={<VechiclesDetails />} />
          <Route path={"/add-vehicle"} element={<AddVehicle />} />
          <Route path={"/edit-vehicle/:id"} element={<EditVehicle />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
