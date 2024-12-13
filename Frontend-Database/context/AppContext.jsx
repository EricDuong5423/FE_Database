import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  let localStorageCart = localStorage.getItem("cart");
  if (localStorageCart) {
    localStorageCart = JSON.parse(localStorageCart);
  } else {
    localStorageCart = [];
  }

  const [cart, setCart] = useState(localStorageCart);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");
  const [ID, setID] = useState(localStorage.getItem("id") || "");

  const addToCart = (item) => {
    let localCart = localStorage.getItem("cart");
    if (!localCart || localCart.length === 0) {
      item.quantity = 1;
      item.totalPrice = item.price;
      localCart = [item];
      localStorage.setItem("cart", JSON.stringify(localCart));
      setCart([...localCart]);
    } else {
      const checkCurrentItem = cart.find((cartItem) => cartItem.id === item.id);
      if (checkCurrentItem) {
        checkCurrentItem.quantity = (checkCurrentItem.quantity || 0) + 1;
        checkCurrentItem.totalPrice =
          checkCurrentItem.quantity * checkCurrentItem.price;
      } else {
        item.quantity = 1;
        item.totalPrice = item.price;
        cart.push(item);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      setCart([...cart]);
    }
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
        setCart,
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
