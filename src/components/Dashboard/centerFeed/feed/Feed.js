import React, { useEffect, useState } from "react";
import { db, database} from "../../../../firebase";
import { collection, getDocs} from "firebase/firestore";
import { Link } from 'react-router-dom';

import './Feed.css';
import feed from '../../img/feed.png';
import profile from '../../img/profile.jpg';
import like from '../../img/like.png';
import share from '../../img/share.png';
import comment from '../../img/comment.png';



const Feed = () => {

    const [feed_local_data, setfeedLocalData] = useState([
        { name:'Aman Pathak', text:'There are still rusted bayonets to be found in the dirt. Alongside broken firearms, canteens, and bullet-struck helmets. At times, still attached to skeletons. The deep-sea team would occasionally find a corroded tank or the remains of a submarine acting as an aquarium. Fighter planes would turn up far off in the mountains, a surprise to climbers. Rare was it that Hisao found letters buried in Saipan. He dropped his shovel and knelt, the archaeology team at work behind him—industrial lights illuminated the tunnel with...',uid:'1'},
        { name:'Ankit Kumar', text:'Humans can transform from solid to spirit in about half a second. I just found this out. Just a half-second ago.  I might be shocked if I weren’t so dead. “Huh,” is all I have to say about it. “Yep,” my wife agrees, equally shockless. She is standing beside me along the sun-baked shoulder of a two-lane country highway, and we are both staring down into the drainage ditch. At the bottom a...',uid:'2'},
        { name:'Hardik Kumar', text:'I met the love of my life at someone else’s prom.He wasn’t my date.My date was a lovely young woman whose name I can’t remember. What I do remember is that her dress was blue the way Southern debutantes in movies always wear blue dresses. At least from the movies I’ve seen. It was blue, but not puffy, and I was grateful for that. I’m resistant to puffy. Puffy and poofy. I can’t tolerate either.We attended her senior prom together, because her boyfriend had just broken up with her the w...',uid:'3'},
        { name:'Rohit Singh', text:'I remember our first cigarettes together were Rothmans, middle tar, with a filter, of course. It was ten o’clock on a Saturday night and we were attending a local church’s youth club disco. I recall that she’d gone outside for a breath of air.God, I could do with a gasper, she’d said, avoiding my gaze, as if we were on stage and I’d forgotten my lines while searching for a prop. I groped around inside my jacket for my pack of Rothmans. My awkward fumbling attracted her attention, and she smiled as I raised my head. She ...',uid:'4'},
        { name:'Arsh Guleria', text:'A mom’s job is never truly finished—Elise knew this instinctively when her son was born. For at least the hundredth time, she sat next to his bed in that chair mending his quilt. There was no way of knowing, the day she bought it at a flea market, that it would become her son’s most valued possession. To call it a quilt stretched the definition as it was nothing more than a thousand pieces of oddly shaped swatches stitched together, layer after layer, until the whole of it was thick enough to hold in the warmth...',uid:'5'}])

        
	const [feed_data, setfeedData] = useState([])
	const feedData = collection(db,'feed');
	getDocs(feedData)
		.then((snapshot) => {
			let feed = [];
			snapshot.docs.forEach((doc) =>{
				feed.push({...doc.data()})
			})
			console.log(feed)
            setfeedData(feed)
		})
		.catch(err =>{
			console.log(err.message)
		})
        console.log(feed_data)
    return (
        <>
            <div className="container pt-3">
                <div className="row d-flex align-items-center ">
                    <span className="col-1 px-1 d-flex justify-content-end">
                        <img className="feedLogo p-0" src={feed}/>
                    </span>	
                    <h1 className="col-10 px-0">Feed</h1>
                </div>
            </div>
	        <hr className="mt-0"></hr>
	  
            <div className="container">
            {
                feed_data.map(feedData=>{
                    let count = feedData.text.length;
                    let link;
                    {/* console.log(count) */}
                    if (count > 5){
                        link = <Link to={{pathname: `/Script/${feedData.uid}`}}><p className="p-0 m-0"style={{color:"#074EE8"}}>Show More</p></Link>
                    }
                    else {
                        link = <br></br>                    }
                return(
                    <>
                    <div className="feed-post-container px-5">
                        <div className="feedHeader">
                            <div className="row pb-0 px-3 d-flex align-items-center">
                                <div className="col-1 ">
                                    <img className="profilePic" src={profile}/>
                                </div>
                                <div className="col-10  ">
                                    <h3 className="m-0 ">{feedData.name}</h3>
                                </div>
                                <hr className="my-2"></hr>
                            </div>
                        </div>
                        <div className="feedContent px-5">
                            <p className="mb-0 ">Script: <br/>{feedData.text.slice(0,100)}</p>
                            {link}
                            {/* <Link to={{pathname: `/Script/${feedData.uid}`}}><p className="p-0 m-0"style={{color:"#074EE8"}}>Show More</p></Link> */}
                        </div>
                        <div className="feedFooter px-5 pt-2">
                            <img className="footerLogo  me-3" src={like}/>
                            <img className="footerLogo mx-3" src={comment}/>
                            <img className="footerLogo mx-3" src={share}/>
                        </div>
                    </div>
                    <hr className="pt-1"></hr>
                    </>
                )
                })
            }

            {
                feed_local_data.map(feed_Data=>{
                    let count = feed_Data.text.length;
                    let links;
                    {/* console.log(count) */}
                    if (count > 5){
                        links = <Link to={{pathname: `/Script/${feed_Data.uid}`}}><p className="p-0 m-0"style={{color:"#074EE8"}}>Show More</p></Link>
                    }
                    else {
                        links = <br></br>                    }
                return(
                    <>
                    <div className="feed-post-container px-5">
                        <div className="feedHeader">
                            <div className="row pb-0 px-3 d-flex align-items-center">
                                <div className="col-1 ">
                                    <img className="profilePic" src={profile}/>
                                </div>
                                <div className="col-10  ">
                                    <h3 className="m-0 ">{feed_Data.name}</h3>
                                </div>
                                <hr className="my-2"></hr>
                            </div>
                        </div>
                        <div className="feedContent px-5">
                            <p className="mb-0">Script: <br/>{feed_Data.text.slice(0,100)}</p>
                            {links}
                            {/* <Link to={{pathname: `/Script/${feedData.uid}`}}><p className="p-0 m-0"style={{color:"#074EE8"}}>Show More</p></Link> */}
                        </div>
                        <div className="feedFooter px-5 pt-2">
                            <img className="footerLogo  me-3" src={like}/>
                            <img className="footerLogo mx-3" src={comment}/>
                            <img className="footerLogo mx-3" src={share}/>
                        </div>
                    </div>
                    <hr className="pt-1"></hr>
                    </>
                )
                })
            }
            </div>
        </>
    );
};

export default Feed;