import React, { useState, useEffect } from "react";
import "../Styles/Menu.css";
import SlideMenuCustomer from "../Components/SlideMenuCustomer";
import api from "../api";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState();
  useEffect(() => {
    const fetchMenuData = async () => {
      const response = await api.get("/menu/viewDishes");
      setSelectedMenu(response.data);
    };

    fetchMenuData();
  }, []);
  return (
    <>
      <SlideMenuCustomer slideNavigate="Menu" />
      <div className="menu-page">
        {/* Header */}
        <header className="menu-header">
          <div className="menu-title-container">
            <h1 className="menu-title">Menu</h1>
            <p className="menu-subtitle">HERE'S OUR YUMMY MENU!</p>
          </div>
        </header>

        {/* Menu Items */}
        <div className="menu-items">
          {!selectedMenu ||
            selectedMenu.map((item, index) => (
              <div className="menu-item" key={index}>
                <div className="item-content">
                  <h2 className="item-title">{item.name}</h2>
                  <p className="item-description">
                    Description: {item.description}
                  </p>
                  <p className="item-recipes">Recipes: {item.recipes}</p>
                  <div className="item-prices">
                    <strong>Price:</strong> <br />
                    <span>XL: {item.price * 2}$</span> <br />
                    <span>L: {item.price * 1.5}$</span> <br />
                    <span>M: {item.price * 1.2}$</span> <br />
                    <span>S: {item.price}$</span>
                  </div>
                </div>
                <div className="item-image">
                  <img src={item.images} alt={item.name} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
