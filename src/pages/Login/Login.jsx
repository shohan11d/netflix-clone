import "./Login.css";
import Logo from "../../assets/logo.png";
import { useState } from "react";

function Login() {
  const [signState, setSignState] = useState("Sign In");
  return (
    <div className="login">
      <img src={Logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your name" />
          ) : null}
          <input type="text" placeholder="Email " />
          <input type="password" placeholder="Password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          <p>
            New to Netflix{" "}
            <span onClick={() => setSignState("Sign Up")}>Sign Up now</span>
          </p>
          <p>
            Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
