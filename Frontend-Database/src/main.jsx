import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./Pages/Home";
import MainLogo from "./Components/MainLogo";
import Register from "./Pages/Register";
import Menu from "./Pages/Menu";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/" element={<Register />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);
