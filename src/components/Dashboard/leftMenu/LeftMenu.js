import React, { useEffect, useState } from "react";
import { db} from "../../../firebase";
import {collection, getDocs, where } from "firebase/firestore";
import './LeftMenu.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import DashboardProfile from "../DashboardProfile";


import logo from '../img/scripto.png'
import tag from '../img/tags.png'
import pen from '../img/topWriters.png'
import profile from '../img/profile.jpg'
import { Link } from 'react-router-dom';

export default function LeftMenu() {

  const [profileUsername, setProfileUsername] = useState([
  { name:'Aman Pathak', text:'There are still rusted bayonets to be found in the dirt. Alongside broken firearms, canteens, and bullet-struck helmets. At times, still attached to skeletons. The deep-sea team would occasionally find a corroded tank or the remains of a submarine acting as an aquarium. Fighter planes would turn up far off in the mountains, a surprise to climbers. Rare was it that Hisao found letters buried in Saipan. He dropped his shovel and knelt, the archaeology team at work behind him—industrial lights illuminated the tunnel with...',uid:'1'},
  { name:'Ankit Kumar', text:'Humans can transform from solid to spirit in about half a second. I just found this out. Just a half-second ago.  I might be shocked if I weren’t so dead. “Huh,” is all I have to say about it. “Yep,” my wife agrees, equally shockless. She is standing beside me along the sun-baked shoulder of a two-lane country highway, and we are both staring down into the drainage ditch. At the bottom a...',uid:'2'},
  { name:'Hardik Kumar', text:'I met the love of my life at someone else’s prom.He wasn’t my date.My date was a lovely young woman whose name I can’t remember. What I do remember is that her dress was blue the way Southern debutantes in movies always wear blue dresses. At least from the movies I’ve seen. It was blue, but not puffy, and I was grateful for that. I’m resistant to puffy. Puffy and poofy. I can’t tolerate either.We attended her senior prom together, because her boyfriend had just broken up with her the w...',uid:'3'},
  { name:'Rohit Singh', text:'I remember our first cigarettes together were Rothmans, middle tar, with a filter, of course. It was ten o’clock on a Saturday night and we were attending a local church’s youth club disco. I recall that she’d gone outside for a breath of air.God, I could do with a gasper, she’d said, avoiding my gaze, as if we were on stage and I’d forgotten my lines while searching for a prop. I groped around inside my jacket for my pack of Rothmans. My awkward fumbling attracted her attention, and she smiled as I raised my head. She ...',uid:'4'},
  { name:'Arsh Guleria', text:'A mom’s job is never truly finished—Elise knew this instinctively when her son was born. For at least the hundredth time, she sat next to his bed in that chair mending his quilt. There was no way of knowing, the day she bought it at a flea market, that it would become her son’s most valued possession. To call it a quilt stretched the definition as it was nothing more than a thousand pieces of oddly shaped swatches stitched together, layer after layer, until the whole of it was thick enough to hold in the warmth...',uid:'5'}])
  
  const [profileName, setProfileName] = useState([])
	const profileUserName = collection(db,'users');
	getDocs(profileUserName)
		.then((snapshot) => {
			let names = [];
			snapshot.docs.forEach((doc) =>{
				names.push({...doc.data(), id: doc.id})
			})
			console.log(names)
      setProfileName(names)
		})
		.catch(err =>{
			console.log(err.message)
		})
  return (
    <>
      <section id="leftMenu">
        <div className="container py-3 px-3">
          {/* Scripto logo */}
          <div className="logo mb-3">
          <Link to="/dashboard/">
            <img className="scriptoLogo" src={logo} alt=""/>
          </Link>
          </div>
          
          {/* Tags */}
          <div>
            <div className=" box d-flex align-items-center">
              <span>
              <img className="tagLogo" src={tag} alt=""/>
              </span>
              <p className="tagsHeader px-2 m-0">Tags</p>
            </div>
            <div className="container py-2">
              <div>
                <p className="tagsContent m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos accusamus iure accusantium. Delectus consectetur fuga aliquam saepe autem accusantium, assumenda totam asperiores, rem iste soluta doloremque velit libero enim eum?</p>
              </div>
              
              {/* filters */}
              <div className="filters py-2">
                <div className="d-flex pb-2" >
                  <button type="button" className="filterBtn">All</button>
                  <button type="button" className="filterBtn">Romantic</button>
                  <button type="button" className="filterBtn">Suspense</button>
                </div>
                <div className="d-flex pb-2">
                  <button className="filterBtn">Horror</button>
                  <button className="filterBtn">Motivation</button>
                </div>
                <div className="d-flex">
                  <button className="filterBtn">Thriller</button>
                  <button className="filterBtn">Drama</button>
                  <button className="filterBtn">Action</button>
                </div>
              </div>
            </div>
          </div>

          {/* Top Writers */}
          <div className="pt-3 ">
            <div className=" box d-flex align-items-center">
              <span>
              <img className="penLogo" src={pen} alt=""/>
              </span>
              <p className="tagsHeader px-2 m-0">Top Writers</p>
            </div>
            <div className="container py-2">
              <div>
                <p className="boxContent m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos accusamus iure accusantium.</p>
              </div>
            
              {/* profile */}
              
              {
                profileUsername.map(name=>{
                  return(                  
                    <>
                      <div className="py-2">
                        <div className="row pb-2 d-flex align-items-center">
                          <div className="col-xl-2 col-lg-4">
                            <img className="profilePic" src={profile} alt=""/>
                          </div>
                          <div className="col-xl-6 col-lg-8 pr-0">
                            <p className="m-0 ">{name.name}</p>
                          </div>
                          <div className="col-xl-4 col-lg-12 profileBtnCol p-0 d-flex align-items-center ">
                            <Link to={`/Profile/${name.name}`}>
                              <button type="button" className="profileBtn">Profile</button>
                              </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
              {
                profileName.map(name=>{
                  return(                  
                    <>
                      <div className="py-2">
                        <div className="row pb-2 d-flex align-items-center">
                          <div className="col-xl-2 col-lg-4">
                            <img className="profilePic" src={profile} alt=""/>
                          </div>
                          <div className="col-xl-6 col-lg-8 pr-0">
                            <p className="m-0 ">{name.name}</p>
                          </div>
                          <div className="col-xl-4 col-lg-12 profileBtnCol p-0 d-flex align-items-center ">
                            <Link to={`/Profile/${name.name}`}>
                              <button type="button" className="profileBtn">Profile</button>
                              </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
              <div className="py-2">
                {/* profile-1 */}
                {/* <div className="row pb-2 d-flex align-items-center">
                  <div className="col-xl-2 col-lg-4">
                    <img className="profilePic" src={profile}/>
                  </div>
                  <div className="col-xl-6 col-lg-8 pr-0">
                    <p className="m-0 ">Writer Name</p>
                  </div>
                  <div className="col-xl-4 col-lg-12 profileBtnCol p-0 d-flex align-items-center ">
                  <Link to="/Profile"><button type="button" className="profileBtn">Profile</button></Link>
                  </div>
                </div> */}
                {/* profile-2 */}
                {/* <div className="row pb-2 d-flex align-items-center">
                  <div className="col-xl-2 col-lg-4">
                    <img className="profilePic" src={profile}/>
                  </div>
                  <div className="col-xl-6 col-lg-8 pr-0">
                    <p className="m-0 ">Writer Name</p>
                  </div>
                  <div className="col-xl-4 col-lg-12 profileBtnCol p-0 d-flex align-items-center ">
                    <Link to="/Profile"><button type="button" className="profileBtn">Profile</button></Link>
                  </div>
                </div> */}
                {/* profile-3 */}
                {/* <div className="row pb-2 d-flex align-items-center">
                  <div className="col-xl-2 col-lg-4">
                    <img className="profilePic" src={profile}/>
                  </div>
                  <div className="col-xl-6 col-lg-8 pr-0">
                    <p className="m-0 ">Writer Name</p>
                  </div>
                  <div className="col-xl-4 col-lg-12 profileBtnCol p-0 d-flex align-items-center ">
                    <Link to="/Profile"><button type="button" className="profileBtn">Profile</button></Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

