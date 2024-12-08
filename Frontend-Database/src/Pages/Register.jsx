import "../Styles/Register.css";
import BaseHeader from "../Components/BaseHeader";
function Register() {
  return (
    <>
      <BaseHeader />
      <div className="register-wrapper">
        <div className="register-container">
          {/* Avatar Section */}
          <div className="avatar-section">
            <div className="profile-icon">
              {/* Hình ảnh bên trong avatar */}
              <img src="/avaregis.png" alt="Avatar" className="avatar-image" />
              {/* Dấu cộng */}
              <div className="add-icon">+</div>
            </div>
          </div>

          {/* Form Section */}
          <div className="form-section">
            <h1 className="register-title">REGISTER</h1>
            <form className="register-form">
              {/* Các trường thông tin */}
              <input
                type="text"
                className="form-input email"
                placeholder="Email or username"
              />
              <div className="name-row">
                <input
                  type="text"
                  className="form-input first-name"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="form-input last-name"
                  placeholder="Last Name"
                />
              </div>
              <input
                type="text"
                className="form-input address"
                placeholder="Address"
              />
              <input
                type="text"
                className="form-input phone"
                placeholder="Phone Number"
              />
              <div className="register-actions">
                <div className="checkbox-container">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms">
                    I have read and agreed to the{" "}
                    <a href="#">Terms and Conditions</a>
                  </label>
                </div>
                <button type="submit" className="btn-signup">
                  Sign up
                </button>
                <p className="sign-in">
                  Already have an account? <a href="#">Sign in here.</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
