import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";
import "./Reset.css";
import ResetBanner from './img/login-banner.png'

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    // <div className="reset">
    //   <div className="reset__container">
    //     <input
    //       type="text"
    //       className="reset__textBox"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       placeholder="E-mail Address"
    //     />
    //     <button className="reset__btn" onClick={() => sendPasswordReset(email)}>
    //       Send password reset email
    //     </button>

    //     <div>
    //       Don't have an account? <Link to="/register">Register</Link> now.
    //     </div>
    //   </div>
    // </div>
    <div className="row">
      <div className="col-md-4"><img src={ResetBanner} className="banner"/></div>
        <div className="col-md-8  d-flex justify-content-center align-items-center">
          <div className="Reset-box">
            <p className="Reset-headline">Scripto</p>
            <div className="Reset-form">
              <div>
                  <div className=" px-1 text-center"> 
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="reset__textBox px-3" />
                    <br/>
                    <button onClick={() => sendPasswordReset(email)} className="reset-btn">RESET PASSWORD</button>
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

export default Reset;
