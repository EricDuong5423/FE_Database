import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import MainLogo from "./Components/MainLogo";
import Register from "./Pages/Register";
import Menu from "./Pages/Menu";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/menu" element={<Menu />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<HomePage />} />
      <Route path={`/` || "/login"} element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);
