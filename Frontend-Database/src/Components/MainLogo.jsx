import logo from "../../public/logo.png";
import "../Styles/MainLogo.css";

function MainLogo() {
  return (
    <div className="main-logo-container">
      <h1>
        Pizzaa<span style={{ color: "#B17457" }}>.</span>
      </h1>
      <p>In crust - we trust</p>
      <img src={logo} />
    </div>
  );
}

export default MainLogo;
