import React, { createContext, useState, useContext } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const deleteCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
