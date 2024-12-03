import logo from "../../public/logo.png";

function MainLogo() {
  return (
    <div className="main-logo">
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
    </div>
  );
}

export default MainLogo;
