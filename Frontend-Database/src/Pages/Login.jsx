import "../Styles/LoginPage.css";
import BaseHeader from "../Components/BaseHeader";
import api from "../api";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useAppContext } from "../../hooks/useAppContext";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { updateToken, updateRole, updateID } = useAppContext();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/user/client/login", {
        username,
        password,
      });
      if (!response.data.access_token)
        throw new Error("Wrong username or password");

      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("id", response.data.id);
      updateID(response.data.id);
      updateToken(response.data.access_token);
      updateRole(response.data.role);
      navigate("/home");
    } catch (error) {
      alert(error);
    }
  };
  const handleNavigate = async () => {
    navigate("/register");
  };
  return (
    <>
      <BaseHeader />
      <div className="login-page">
        <div className="form">
          <p id="title">Login</p>
          <form className="login-form">
            <input
              type="text"
              placeholder="Email or username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Sign in</button>
            <p className="message">
              Not registered? <a onClick={handleNavigate}>Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
