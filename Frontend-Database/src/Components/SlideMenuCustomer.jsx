import { useState } from "react";
import { Link, useNavigate } from "react-router";
import "../Styles/SlideMenu.css";
// images
import logo from "../../public/logo.png";
import searchIcon from "../../public/searchicon.png";
import cartIcon from "../../public/cart.png";
import placeHolder from "../../public/placeholderavatar.png";
import { useAppContext } from "../../hooks/useAppContext";

const home =
  "M0.5 6.66646V16.6665C0.5 16.8875 0.587797 17.0994 0.744078 17.2557C0.900358 17.412 1.11232 17.4998 1.33333 17.4998H5.5C5.72101 17.4998 5.93297 17.412 6.08925 17.2557C6.24554 17.0994 6.33333 16.8875 6.33333 16.6665V10.8331H9.66667V16.6665C9.66667 16.8875 9.75446 17.0994 9.91074 17.2557C10.067 17.412 10.279 17.4998 10.5 17.4998H14.6667C14.8877 17.4998 15.0996 17.412 15.2559 17.2557C15.4122 17.0994 15.5 16.8875 15.5 16.6665V6.66646C15.5 6.53709 15.4699 6.4095 15.412 6.29379C15.3542 6.17807 15.2702 6.07742 15.1667 5.9998L8.5 0.999797C8.35575 0.891611 8.18031 0.83313 8 0.83313C7.81969 0.83313 7.64425 0.891611 7.5 0.999797L0.833333 5.9998C0.729837 6.07742 0.645834 6.17807 0.587977 6.29379C0.530121 6.4095 0.5 6.53709 0.5 6.66646ZM2.16667 7.08313L8 2.70813L13.8333 7.08313V15.8331H11.3333V9.9998C11.3333 9.77878 11.2455 9.56682 11.0893 9.41054C10.933 9.25426 10.721 9.16646 10.5 9.16646H5.5C5.27899 9.16646 5.06702 9.25426 4.91074 9.41054C4.75446 9.56682 4.66667 9.77878 4.66667 9.9998V15.8331H2.16667V7.08313Z";

const menu =
  "M16.875 7.375H16.0032L16.1094 6.31119C16.1354 6.05056 16.1066 5.78737 16.0246 5.53858C15.9427 5.28979 15.8096 5.06093 15.6338 4.86674C15.458 4.67255 15.2435 4.51734 15.0041 4.41112C14.7647 4.30489 14.5057 4.25001 14.2437 4.25H4.50625C4.24427 4.25002 3.9852 4.30493 3.74573 4.4112C3.50627 4.51746 3.29173 4.67272 3.11594 4.86696C2.94015 5.06121 2.80701 5.29013 2.7251 5.53897C2.64319 5.78782 2.61433 6.05107 2.64037 6.31175L3.4963 15.8719C3.51309 16.0218 3.48018 15.7108 3.59993 16.3107H1.73055C1.56479 16.3107 1.40582 16.3765 1.28861 16.4937C1.1714 16.6109 1.10555 16.7699 1.10555 16.9357C1.10555 17.1014 1.1714 17.2604 1.28861 17.3776C1.40582 17.4948 1.56479 17.5607 1.73055 17.5607L17 17.75C17.1658 17.75 17.3247 17.6842 17.4419 17.5669C17.5591 17.4497 17.625 17.2908 17.625 17.125C17.625 16.9592 17.5591 16.8003 17.4419 16.6831C17.3247 16.5658 17.1658 16.5 17 16.5H15.1307C15.1827 16.3586 15.2175 16.2115 15.2342 16.0618L15.4405 13H16.875C17.3721 12.9995 17.8487 12.8017 18.2002 12.4502C18.5517 12.0987 18.7495 11.6221 18.75 11.125V9.25C18.7495 8.75289 18.5517 8.27629 18.2002 7.92478C17.8487 7.57327 17.3721 7.37555 16.875 7.375ZM5.66128 16.3107C5.50625 16.3112 5.3566 16.2538 5.24167 16.1498C5.12673 16.0457 5.05478 15.9025 5.03991 15.7482L4.13784 6.33982C4.12913 6.25289 4.13874 6.1651 4.16603 6.0821C4.19332 5.99911 4.23769 5.92275 4.29629 5.85795C4.35489 5.79314 4.42641 5.74133 4.50625 5.70585C4.58608 5.67037 4.67247 5.65201 4.75984 5.65195L14.0204 5.70585C14.1077 5.70591 14.1941 5.72426 14.2739 5.75971C14.3537 5.79517 14.4252 5.84694 14.4838 5.9117C14.5424 5.97647 14.5868 6.05278 14.6141 6.13574C14.6414 6.21869 14.6511 6.30645 14.6424 6.39335L14.0204 15.7488C14.0054 15.9031 13.9334 16.0462 13.8184 16.1501C13.7034 16.254 13.5538 16.3113 13.3988 16.3107H5.66128ZM17.5 11.125C17.4999 11.2907 17.434 11.4496 17.3168 11.5668C17.1996 11.684 17.0407 11.7499 16.875 11.75H15.5656L15.8781 8.625H16.875C17.0407 8.6251 17.1996 8.69098 17.3168 8.80817C17.434 8.92536 17.4999 9.08427 17.5 9.25V11.125Z";

const history =
  "M9.99999 5.49996V10.5L13.3333 12.1666M18.3333 10.5C18.3333 15.1023 14.6024 18.8333 9.99999 18.8333C5.39762 18.8333 1.66666 15.1023 1.66666 10.5C1.66666 5.89759 5.39762 2.16663 9.99999 2.16663C14.6024 2.16663 18.3333 5.89759 18.3333 10.5Z";

const chat =
  "M2.54157 18.725C2.71598 18.797 2.90289 18.8338 3.09157 18.8333C3.27764 18.8343 3.46201 18.7979 3.63377 18.7263C3.80554 18.6547 3.9612 18.5494 4.09157 18.4167L6.1749 16.3333H14.1666C15.2716 16.3333 16.3314 15.8943 17.1128 15.1129C17.8942 14.3315 18.3332 13.2717 18.3332 12.1667V7.16667C18.3332 6.0616 17.8942 5.00179 17.1128 4.22039C16.3314 3.43899 15.2716 3 14.1666 3H5.83323C4.72816 3 3.66836 3.43899 2.88695 4.22039C2.10555 5.00179 1.66657 6.0616 1.66657 7.16667V17.4083C1.66392 17.6902 1.7459 17.9663 1.90189 18.201C2.05788 18.4358 2.28072 18.6183 2.54157 18.725ZM3.33323 7.16667C3.33323 6.50363 3.59662 5.86774 4.06547 5.3989C4.53431 4.93006 5.17019 4.66667 5.83323 4.66667H14.1666C14.8296 4.66667 15.4655 4.93006 15.9343 5.3989C16.4032 5.86774 16.6666 6.50363 16.6666 7.16667V12.1667C16.6666 12.8297 16.4032 13.4656 15.9343 13.9344C15.4655 14.4033 14.8296 14.6667 14.1666 14.6667H5.83323C5.72356 14.666 5.61484 14.6871 5.51331 14.7285C5.41178 14.77 5.31943 14.8311 5.24157 14.9083L3.33323 16.825V7.16667Z";

const wallet =
  "M4.16663 18H15.8333C16.4963 18 17.1322 17.7366 17.6011 17.2678C18.0699 16.7989 18.3333 16.163 18.3333 15.5V5.5C18.3333 4.83696 18.0699 4.20107 17.6011 3.73223C17.1322 3.26339 16.4963 3 15.8333 3H4.16663C3.50359 3 2.8677 3.26339 2.39886 3.73223C1.93002 4.20107 1.66663 4.83696 1.66663 5.5V15.5C1.66663 16.163 1.93002 16.7989 2.39886 17.2678C2.8677 17.7366 3.50359 18 4.16663 18ZM16.6666 11.3333H12.5V9.66667H16.6666V11.3333ZM3.33329 5.5C3.33329 5.27899 3.42109 5.06702 3.57737 4.91074C3.73365 4.75446 3.94561 4.66667 4.16663 4.66667H15.8333C16.0543 4.66667 16.2663 4.75446 16.4226 4.91074C16.5788 5.06702 16.6666 5.27899 16.6666 5.5V8H11.6666C11.4456 8 11.2337 8.0878 11.0774 8.24408C10.9211 8.40036 10.8333 8.61232 10.8333 8.83333V12.1667C10.8333 12.3877 10.9211 12.5996 11.0774 12.7559C11.2337 12.9122 11.4456 13 11.6666 13H16.6666V15.5C16.6666 15.721 16.5788 15.933 16.4226 16.0893C16.2663 16.2455 16.0543 16.3333 15.8333 16.3333H4.16663C3.94561 16.3333 3.73365 16.2455 3.57737 16.0893C3.42109 15.933 3.33329 15.721 3.33329 15.5V5.5Z";

function SlideMenuCustomer({ slideNavigate }) {
  return (
    <div className="slide-menu">
      <IconName />
      <Search />
      <SlideMenu slideNavigate={slideNavigate} />
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

function SlideMenu({ slideNavigate }) {
  const [select, setSelect] = useState(slideNavigate);
  return (
    <div className="slide-menu-container">
      <Menu icon={home} text="Home" select={select} setSelect={setSelect} />
      <Menu icon={menu} text="Menu" select={select} setSelect={setSelect} />
      <Menu
        icon={history}
        text="History"
        select={select}
        setSelect={setSelect}
      />
      <Menu icon={chat} text="Chat" select={select} setSelect={setSelect} />
      <Menu icon={wallet} text="Wallet" select={select} setSelect={setSelect} />
      <Menu icon={cartIcon} text="Cart" select={select} setSelect={setSelect} />
    </div>
  );
}

function Menu({ icon, text, select, setSelect }) {
  const navigate = useNavigate();
  function changeMenu() {
    setSelect(text);
    const navigateWeb = "/" + text.toLowerCase();
    navigate(navigateWeb);
  }
  return (
    <button
      className={select === text ? "menu selected" : "menu"}
      onClick={changeMenu}
    >
      {text !== "Cart" ? (
        <VectorMenuItem icon={icon} text={text} select={select} />
      ) : (
        <img src={icon} width="22px" height="22px" />
      )}
      <p>{text}</p>
    </button>
  );
}

function VectorMenuItem({ icon, text, select }) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {text === "History" ? (
        <path d={icon} stroke={select === text ? "#b17457" : "#1e1e1e"} />
      ) : (
        <path d={icon} fill={select === text ? "#b17457" : "#1e1e1e"} />
      )}
    </svg>
  );
}

function GuestAvatar() {
  const { deleteCart, deleteToken, deleteRole } = useAppContext();
  return (
    <div
      className="GuestAvatar"
      onClick={() => {
        deleteCart();
        deleteRole();
        deleteToken();
        localStorage.removeItem("token");
        localStorage.removeItem("role");
      }}
    >
      <Link to="/login">
        <img src={placeHolder} />
      </Link>
    </div>
  );
}

export default SlideMenuCustomer;
