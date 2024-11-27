import { useState, useEffect } from "react";
import "../Styles/SlideMenu.css";
import logo from "../../public/logo.png";
import searchIcon from "../../public/searchicon.png";
import homeMenu from "../../public/home.png";
import menuMenu from "../../public/menu.png";
import historyMenu from "../../public/history.png";
import chatMenu from "../../public/chat.png";
import walletMenu from "../../public/wallet.png";
import cartMenu from "../../public/cart.png";
import placeHolder from "../../public/placeholderavatar.png";

function SlideMenuCustomer() {
  return (
    <div className="slide-menu">
      <IconName />
      <Search />
      <SlideMenu />
      <GuestAvatar />
    </div>
  );
}

function IconName() {
  return (
    <div className="icon-name-container">
      <div className="name">
        <h1>
          Pizzaa<span style={{ color: "#B17457" }}>.</span>
        </h1>
        <h2>In crust - we trust</h2>
      </div>
      <div className="icon">
        <img src={logo} height={`${90.83}px`} width={`${102.85}px`} />
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search here" />
      <button className="search-button">
        <img src={searchIcon} />
      </button>
    </div>
  );
}

function SlideMenu() {
  return (
    <div className="slide-menu-container">
      <Menu icon={homeMenu} text="Home" />
      <Menu icon={menuMenu} text="Menu" />
      <Menu icon={historyMenu} text="History" />
      <Menu icon={chatMenu} text="Chat" />
      <Menu icon={walletMenu} text="Wallet" />
      <Menu icon={cartMenu} text="Cart" />
    </div>
  );
}

function Menu({ icon, text }) {
  return (
    <button className="menu">
      <img
        src={icon}
        style={
          text === "Cart"
            ? { height: "22px", width: "22px" }
            : { height: "20px", width: "20px" }
        }
      />
      <p>{text}</p>
    </button>
  );
}

function GuestAvatar() {
  return (
    <div className="GuestAvatar">
      <img src={placeHolder} />
    </div>
  );
}

export default SlideMenuCustomer;
