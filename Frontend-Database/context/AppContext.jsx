import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");
  const [ID, setID] = useState(localStorage.getItem("id") || "");

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const deleteCart = () => {
    localStorage.setItem("cart", []);
    setCart([]);
  };

  const updateToken = (token) => {
    setToken(token);
  };

  const updateRole = (role) => {
    setRole(role);
  };

  const updateID = (id) => {
    setID(id);
  };

  const deleteToken = () => {
    setToken("");
    localStorage.removeItem("token");
  };
  const deleteRole = () => {
    setRole("");
    localStorage.removeItem("role");
  };

  const deleteID = () => {
    setID("");
    localStorage.removeItem("id");
  };

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
        ID,
        updateID,
        deleteID,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
