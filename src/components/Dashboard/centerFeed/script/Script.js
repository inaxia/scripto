import React from 'react';
import feed from '../../img/feed.png';
import profile from '../../img/profile.jpg';
import ScriptHeaderLogo from '../../img/script.png';

const Script = (props) => {
    return (
        <>
            <div className="container pt-3">
                <div className="row d-flex align-items-center ">
                    <span className="col-1 px-1 d-flex justify-content-end">
                        <img className="feedLogo p-0" src={ScriptHeaderLogo}/>
                    </span>	
                    <h1 className="col-10 px-0">Script</h1>
                </div>
            </div>
	        <hr className="mt-0"></hr>
	  
            <div className="container">
                    <div className="feed-post-container px-5">
                        <div className="feedHeader">
                            <div className="row pb-0 px-3 d-flex align-items-center">
                                <div className="col-1 ">
                                    <img className="profilePic" src={profile}/>
                                </div>
                                <div className="col-10  ">
                                    {/* <h3 className="m-0 ">Nishant Mishra</h3> */}
                                    <h3 className="m-0 ">{props.userName}</h3>
                                </div>
                                <hr className="my-2"></hr>
                            </div>
                        </div>
                        <div className="feedContent px-5">
                            <p className="mb-0">Script: <br/>{props.text}</p>
                        </div>
                    </div>
                    <hr className="pt-1"></hr>
            </div>
        </>
    );
};

export default Script;