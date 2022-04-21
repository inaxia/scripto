import './CenterFeed.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Feed from './feed/Feed'
import Profile from './profile/Profile'
import Script from './script/Script'

const CenterFeed = () => {
    return (
        <>
            <div>
                {/* <Router>
                    <Routes>
                        <Route exact path="/script" element={<Feed />} />
                        <Route exact path="/profile" element={<Script />} />
                    </Routes>
                </Router> */}
            </div>    
            <Feed/>
            {/* <Profile/>
            <Script/> */}
        </>
    );
};

export default CenterFeed;

