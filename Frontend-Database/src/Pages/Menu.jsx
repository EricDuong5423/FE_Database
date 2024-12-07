import React, { useState } from "react";
import "../Styles/Menu.css";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState("Pizza");

  const menus = {
    Pizza: [
      {
        name: "Tropical Pizza",
        image: "/tropical-pizza.png",
        prices: { XL: "20$", L: "15$", M: "10$", S: "8$" },
        description: "Cheese and tomato-based sea food pizza",
      },
      {
        name: "Veggie Pizza",
        image: "/veggie-pizza.png",
        prices: { XL: "18$", L: "14$", M: "12$", S: "9$" },
        description: "Cheese and fresh vegetable toppings",
      },
      {
        name: "Pepperoni Pizza",
        image: "/pepperoni-pizza.png",
        prices: { XL: "22$", L: "17$", M: "13$", S: "10$" },
        description: "Cheese, tomato, and pepperoni toppings",
      },
      {
        name: "Chicken Teriyaki Pizza",
        image: "/chicken-teriyaki-pizza.png",
        prices: { XL: "24$", L: "19$", M: "14$", S: "11$" },
        description: "Chicken, teriyaki sauce, cheese, and vegetables",
      },
      {
        name: "Cheese & Bacon Pizza",
        image: "/cheese-bacon-pizza.png",
        prices: { XL: "25$", L: "20$", M: "15$", S: "12$" },
        description: "Cheese, bacon, and tomato toppings",
      },
      {
        name: "Mediterranean Pizza",
        image: "/mediterranean-pizza.png",
        prices: { XL: "23$", L: "18$", M: "13$", S: "10$" },
        description: "Cheese, tomato, olive, and mushroom toppings",
      },
    ],

    Pasta: [
      
    ]
  };

  return (
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
        {menus.Pizza.map((item, index) => (
          <div className="menu-item" key={index}>
            <div className="item-content">
              <h2 className="item-title">{item.name}</h2>
              <p className="item-description">{item.description}</p>
              <div className="item-prices">
                <span>XL: {item.prices.XL}</span>
                <span>L: {item.prices.L}</span>
                <span>M: {item.prices.M}</span>
                <span>S: {item.prices.S}</span>
              </div>
            </div>
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
