import "../Styles/LoginPage.css";
import BaseHeader from "../Components/BaseHeader";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <BaseHeader />
      <div class="login-page">
        <div class="form">
          <p id="title">Login</p>
          {/* <form class="register-form">
                    <input type="text" placeholder="name" />
                    <input type="password" placeholder="password" />
                    <input type="text" placeholder="email address" />
                    <button>create</button>
                    <p class="message">Already registered? <a href="#">Sign In</a></p>
                </form> */}
          <form class="login-form">
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
            <p class="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
