import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import LoginBanner from './img/login-banner.png'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="row">
      <div className="col-md-4"><img src={LoginBanner} className="banner"/></div>
        <div className="col-md-8  d-flex justify-content-center align-items-center">
          <div className="Login-box">
            <p className="Login-headline">Scripto</p>
            <div className="Login-form">
              <div>
                  <div className=" px-1 text-center"> 
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="login__textBox px-3" />
                    <br/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="login__textBox px-3" />
                    <br/>
                    <button onClick={() => logInWithEmailAndPassword(email, password)} className="login-btn login__btn">LOGIN</button>
                    <br/>
                    <button onClick={signInWithGoogle} className="login-btn login__google">LOGIN WITH GOOGLE</button>
                    <div>
                      <Link to="/reset">Forgot Password</Link>
                    </div>
                    <div>
                      <p>
                        Don't have an account? <Link to="/register">REGISTER</Link>
                      </p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Login;
