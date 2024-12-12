import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const deleteCart = () => {
    setCart([]);
  };

  const updateToken = (token) => {
    setToken(token);
  };

  const updateRole = (role) => {
    setRole(role);
  };

  const deleteToken = () => setToken("");
  const deleteRole = () => setRole("");

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        deleteCart,
        token,
        updateToken,
        role,
        updateRole,
        deleteToken,
        deleteRole,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
