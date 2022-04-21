import React, { useEffect, useState } from "react";
import LeftMenu from './leftMenu/LeftMenu';
import RightMenu from './rightMenu/RightMenu';
import Profile from './centerFeed/profile/Profile'
import { useParams  } from "react-router-dom"
import {query, collection, getDocs, where } from "firebase/firestore";
import { db} from "../../firebase";

const DashboardProfile = () => {
    const {user} = useParams();
    console.log({user})
  const [profileData, setProfileData] = useState([
    { name:'Nishant', Text:'Hi This is a Nishant text',uid:'1'},
    { name:'Ankit', Text:'Hi This is a Ankit trying to add a text',uid:'2'},
    { name:'Hardik', Text:'Hi This is Hardik Kumar',uid:'3'},
    { name:'Rohit', Text:'My name is Rohit Kumar Singh Rajput',uid:'4'},
    { name:'Arsh', Text:'Hi This is Arsh, Am a standup artist',uid:'5'}])
    
// const [profileData, setProfileData] = useState([])
const profileUserName = collection(db,'feed') ;
getDocs(profileUserName)
    .then((snapshot) => {
        let names = [];
        snapshot.docs.forEach((doc) =>{
            names.push({...doc.data(), id: doc.id})
        })
        // console.log(names)
        setProfileData(names);
    })
    .catch(err =>{
        console.log(err.message)
    })
        


    console.log(profileData)
    const username = profileData.filter(task => task.uid === user);
    
    const userName = username[0]; 
    // console.log(JSON.stringify(username));
    // console.log(username.name);

    return (
        <>    
            <section id="dashboard">
                <div className="row">
                    <div className="col-3 left">
                     <LeftMenu/>
                    </div>  
                    <div className="col-6 center">
                        {/* <Profile userName={userName.name}/> */}
                        <Profile userName={user}/>          
                    </div>  
                    <div className="col-3 right">
                        <RightMenu/>
                    </div>  
                </div>
            </section>
        </>
    );
};

export default DashboardProfile;