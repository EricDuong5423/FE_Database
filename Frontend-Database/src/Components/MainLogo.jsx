import logo from "../../public/logo.png";
import "../Styles/MainLogo.css";

function MainLogo() {
  return (
    <div className="main-logo-container">
      <div className="name">
        <p id="title">
          Pizzaa<span style={{ color: "#B17457" }}>.</span>
        </p>
        <p id="slogan">In crust - we trust</p>
      </div>
      <div className="icon">
        <img src={logo} height={`${136.245}px`} width={`${154.275}px`} />
      </div>
    </div>
  );
}

export default MainLogo;
