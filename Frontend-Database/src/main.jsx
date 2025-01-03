import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import Register from "./Pages/Register";
import Menu from "./Pages/Menu";
import LoginAdmin from "./Pages/LoginAdmin";
import Cart from "./Pages/Cart";
import Admin from "./Pages/Admin";
import KitchenStaff from "./Pages/KitchenStaff";
import OrderList from "./Pages/OrderList";
import { AppProvider } from "../context/AppContext";
import { useAppContext } from "../hooks/useAppContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useAppContext();
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-employee" element={<LoginAdmin />}></Route>
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
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/kitchenstaff"
          element={
            <ProtectedRoute>
              <KitchenStaff />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/salesman"
          element={
            <ProtectedRoute>
              <OrderList />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
