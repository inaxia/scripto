import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import "./Register.css";
import RegisterBanner from './img/registration-banner.png'

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="row">
      <div className="col-md-4"><img src={RegisterBanner} className="banner"/></div>
        <div className="col-md-8  d-flex justify-content-center align-items-center">
          <div className="Registration-box">
            <p className="Registration-headline">Scripto</p>
            <div className="Registration-form">
              <div>
                  <div className=" px-1 text-center"> 
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="register__textBox px-3" />
                    <br/>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="register__textBox px-3" />
                    <br/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="register__textBox px-3" />
                    <br/>
                    <button onClick={register} className="register-btn register__btn">REGISTER</button>
                    <br/>
                    <button onClick={signInWithGoogle} className="register-btn register__google">REGISTER WITH GOOGLE</button>
                    <div>
                      <p>
                        Already Register? <Link to="/">LOGIN</Link>
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

export default Register;
