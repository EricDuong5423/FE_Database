import "../Styles/LoginPage.css";
import BaseHeader from "../Components/BaseHeader";

function LoginPage() {
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
                        <input type="text" placeholder="Email or username" />
                        <input type="password" placeholder="Password" />
                        <button>Sign in</button>
                        <p class="message">Not registered? <a href="#">Create an account</a></p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginPage;