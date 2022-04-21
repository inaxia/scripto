import React, { useEffect, useState } from "react";
import LeftMenu from './leftMenu/LeftMenu';
import RightMenu from './rightMenu/RightMenu';
import CenterFeed from './centerFeed/CenterFeed';
import Feed from './centerFeed/feed/Feed'
import Profile from './centerFeed/profile/Profile'
import Script from './centerFeed/script/Script'

import "./Dashboard.css";

function Dashboard(props) {
  
  return (
    <>    
      {/* <div className="dashboard">
        <div className="dashboard__container">
          Logged in as
          <div>{name}</div>
          <div>{user?.email}</div>
          <button className="dashboard__btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div> */}
        <section id="dashboard">
          <div className="row">
            <div className="col-3 left">
            <LeftMenu/>
            </div>  
            <div className="col-6 center">
            {/* <CenterFeed/> */}
            {/* <{...props.route}/>  */}
            <Feed />        
              
            </div>  
            <div className="col-3 right">
            <RightMenu/>
            </div>  
          </div>
        </section>

    </>

  );
}


export default Dashboard;
