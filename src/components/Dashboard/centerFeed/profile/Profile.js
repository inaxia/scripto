import React from 'react';
import feed from '../../img/feed.png';
import profile from '../../img/profile.jpg';
import headProfile from '../../img/headProfile.png';
import ScriptHeaderLogo from '../../img/script.png';

const Profile = (props) => {
    // let usernames = props.userName
    // console.log(usernames)
    return (
        <>
            <div className="container pt-3">
                <div className="row d-flex align-items-center ">
                    <span className="col-1 px-1 d-flex justify-content-end">
                        <img className="feedLogo p-0" src={headProfile}/>
                    </span>	
                    <h1 className="col-10 px-0">Profile</h1>
                </div>
            </div>
	        <hr className="mt-0"></hr>

            <div className="container">
                    <div className="feed-post-container px-5">
                        <div className="feedHeader">
                        {/* {  */}
                            {/* usernames.map(name=>{ */}
                                {/* return( */}
                                    {/* <> */}
                                    <div className="row pb-0 px-3 d-flex align-items-center">
                                        <div className="col-1 ">
                                            <img className="profilePic" src={profile}/>
                                        </div>
                                    <div className="col-10  ">
                                        <h3 className="m-0 ">{props.userName}</h3>
                                    </div>
                                    <hr className="my-2"></hr>
                                    </div>          
                                    {/* </> */}
                                {/* ) */}
                            {/* }) */}
                        {/* } */}
                            {/* <div className="row pb-0 px-3 d-flex align-items-center">
                                <div className="col-1 ">
                                    <img className="profilePic" src={profile}/>
                                </div>
                                <div className="col-10  ">
                                    <h3 className="m-0 ">{props.userName}</h3>
                                </div>
                                <hr className="my-2"></hr>
                            </div> */}
                        </div>
                        <div className="feedContent px-5">
                            <p className="mb-0">Hello! <br/>This is {props.userName}</p>
                        </div>
                    </div>
                    <hr className="pt-1"></hr>  
            </div>
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
                            <p className="mb-0">Script: <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida dictum fusce ut. Turpis egestas sed tempus urna et. Porta nibh venenatis cras sed felis. Aliquet eget sit amet tellus. Quisque sagittis purus sit amet volutpat. Ullamcorper dignissim cras tincidunt lobortis feugiat. Elit at imperdiet dui accumsan. Amet facilisis magna etiam tempor orci eu. Turpis egestas integer eget aliquet nibh praesent tristique. Nec tincidunt praesent semper feugiat nibh sed. Semper auctor neque vitae tempus quam pellentesque nec.

Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Interdum velit laoreet id donec ultrices tincidunt. Lectus mauris ultrices eros in. Viverra nibh cras pulvinar mattis nunc. Sed velit dignissim sodales ut eu. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Ornare aenean euismod elementum nisi. Amet aliquam id diam maecenas ultricies mi eget mauris. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nulla posuere sollicitudin aliquam ultrices sagittis. Dictumst quisque sagittis purus sit. Dui ut ornare lectus sit amet est placerat. Dictum non consectetur a erat nam at lectus urna. Non arcu risus quis varius quam quisque. Praesent semper feugiat nibh sed pulvinar proin. Nunc id cursus metus aliquam.</p>
                        </div>
                    </div>
                    <hr className="pt-1"></hr>
            </div>
        </>
    );
};

export default Profile;