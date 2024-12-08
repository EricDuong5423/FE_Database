import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import Register from "./Pages/Register";
import Menu from "./Pages/Menu";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/menu"
        element={
          <ProtectedRoute>
            <Menu />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </BrowserRouter>
);
