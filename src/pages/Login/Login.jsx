import "./Login.css";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { login, signup } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif";


function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };
  return (
    loading ? (
     <div className="login-spinner">
      <img src={netflix_spinner} alt="" />
     </div>
    ) : ( 
    <div className="login">
      <img src={Logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : null}
          <input
            type="text"
            placeholder="Email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{signState}</button>
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
            Already have an account?{" "}
            <span onClick={() => setSignState("Sign In")}>Sign In</span>
          </p>
        </div>
      </div>
    </div>
      ))
}

export default Login;
