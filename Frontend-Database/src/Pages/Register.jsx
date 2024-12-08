import "../Styles/Register.css";
import BaseHeader from "../Components/BaseHeader";
import { useNavigate } from "react-router";
import { useState } from "react";
import api from "../api";

function Register() {
  const navigate = useNavigate();
  const [userName, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [firstName, setFirstname] = useState(null);
  const [lastName, setLastname] = useState(null);
  const [address, setAddress] = useState(null);
  const [phoneNumber, setPhonenumber] = useState(null);
  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      if (
        !userName ||
        !firstName ||
        !lastName ||
        !address ||
        !phoneNumber ||
        !password
      ) {
        throw new Error("missing fields");
      }
      const [Ward, District, City] = address.split(",");
      const data = {
        username: userName,
        name: firstName + " " + lastName,
        phone_number: phoneNumber,
        ward: Ward,
        district: District,
        city: City,
        password: password,
      };
      const response = await api.post("/user/client/register", data);
      if (response.status !== 201) {
        throw new Error("Something wrong");
      }
      alert("Done successfully");
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };
  const handleNavigate = async () => {
    navigate("/login");
  };
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
              <input
                type="text"
                className="form-input email"
                placeholder="Email or username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="name-row">
                <input
                  type="text"
                  className="form-input first-name"
                  placeholder="First Name"
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                  type="text"
                  className="form-input last-name"
                  placeholder="Last Name"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <input
                type="text"
                className="form-input address"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                className="form-input phone"
                placeholder="Phone Number"
                onChange={(e) => setPhonenumber(e.target.value)}
              />
              <input
                type="text"
                className="form-input password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="register-actions">
                <div className="checkbox-container">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms">
                    I have read and agreed to the
                    <a href="#">Terms and Conditions</a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn-signup"
                  onClick={handleSignUp}
                >
                  Sign up
                </button>
                <p className="sign-in">
                  Already have an account?{" "}
                  <a onClick={handleNavigate}>Sign in here.</a>
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
