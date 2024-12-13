import { useState, useEffect } from "react";
import "../Styles/Menu.css";
import SlideMenuCustomer from "../Components/SlideMenuCustomer";
import api from "../api";
import { useAppContext } from "../../hooks/useAppContext";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState();
  const { addToCart, token } = useAppContext();
  useEffect(() => {
    if (token) {
      const fetchMenuData = async () => {
        const response = await api.get("/menu/viewDishes", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSelectedMenu(response.data);
      };

      fetchMenuData();
    }
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
                <div className="item-desc-wrapper">
                  <div className="item-content">
                    <h2 className="item-title">{item.name}</h2>
                    <p className="item-description">
                      Description: {item.description}
                    </p>
                    <p className="item-recipes">Recipes: {item.recipes}</p>
                  </div>
                  <div className="item-image">
                    <img src={item.images} alt={item.name} />
                  </div>
                </div>
                <div className="add-to-cart-button">
                  <button onClick={() => addToCart(item)}>
                    <div className="default-btn">
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="#ffffff"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cart-icon"
                      >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                      <span>Add to Cart</span>
                    </div>
                    <div className="hover-btn">
                      <span>{item.price / 1000}k vnd</span>
                    </div>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
