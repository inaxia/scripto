import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { auth, db, logout, database } from "../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import './RightMenu.css';
import logo from '../img/blueScripto.png'
import profile from '../img/profile.jpg'
import settings from '../img/settings.png'
import write from '../img/write.png'
import AddNote from './AddNote';

export default function RightMenu() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

// ///////////////////////////////////////////////


  return (
    <>
      <section id="rightMenu">
        <div className="container py-3 px-3 rightPanel">
          {/* Scripto logo */}
          <div className=" mb-3 d-flex justify-content-end">
            <button className="logoutBtn" onClick={logout}>
            Logout
          </button>
          </div>
          
          {/* Right Scripto Box */}
          <div>
            <div className=" box d-flex align-items-center">
              <span>
              <img className="scriptologo" src={logo}/>
              </span>
              <p className="rightBoxHeader px-2 m-0">Scripto</p>
            </div>
            <div className="container py-2">
              <div>
                <p className="rightBoxContent m-0">Scripto is a platform for content writers and script writers. It focuses on connecting the content & script writers with the film directors, youtubers, and ott directors who are in need of scripts for their movies, YouTube videos, and Web series.</p>
              </div>
            </div>
            <div className="terms d-flex justify-content-center px-3">
              <div className="px-1">
                <a href="/">Privacy Policy</a>
              </div>
              <div className="px-1">
                <a href="/">Terms of Service</a>
              </div>
              <div className="px-1">
                <a href="/">Contact Us</a>
              </div>
            </div>
          </div>

          <div  style={{marginTop:"12rem"}}>
            <div className="pt-3">
              <div className="profile">
                <div className="row pb-2 px-3 d-flex align-items-center">
                  <div className="col-2 ">
                    {/* <div className="profile"></div> */}
                    <img className="profilePic" src={profile}/>
                  </div>
                  <div className="col-8  ">
                    <p className="m-0 ">{name}</p>
                  </div>
                  <div className="col-2  d-flex align-items-center justify-content-end ">
                    {/* <button type="button" className="profileBtn"></button> */}
                    <a href="">
                      <img className="settingsLogo" src={settings}/>
                    </a>
                  </div>
                  <hr className="mt-2"></hr>
                </div>
                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quia ut, aliquid ipsa illo nobis nihil aperiam suscipit corporis cum vel qui neque fuga blanditiis ab reiciendis vero veniam. Voluptatum.</p> */}
              </div>
            </div>

            {/* content post */}
            <AddNote names={name}/>
          </div>
          
          

        </div>
      </section>
    </>
  )
}
