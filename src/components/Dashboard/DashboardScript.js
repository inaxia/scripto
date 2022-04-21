import React, { useEffect, useState } from "react";
import LeftMenu from './leftMenu/LeftMenu';
import RightMenu from './rightMenu/RightMenu';
import Script from './centerFeed/script/Script'
import { useParams  } from "react-router-dom"
import { query, collection, getDocs, where } from "firebase/firestore";
import { db, database} from "../../firebase";

const DashboardScript = () => {
    const {user} = useParams();

    const [profileData, setProfileData] = useState([
        { name:'Aman Pathak', text:'There are still rusted bayonets to be found in the dirt. Alongside broken firearms, canteens, and bullet-struck helmets. At times, still attached to skeletons. The deep-sea team would occasionally find a corroded tank or the remains of a submarine acting as an aquarium. Fighter planes would turn up far off in the mountains, a surprise to climbers. Rare was it that Hisao found letters buried in Saipan. He dropped his shovel and knelt, the archaeology team at work behind him—industrial lights illuminated the tunnel with...',uid:'1'},
        { name:'Ankit Kumar', text:'Humans can transform from solid to spirit in about half a second. I just found this out. Just a half-second ago.  I might be shocked if I weren’t so dead. “Huh,” is all I have to say about it. “Yep,” my wife agrees, equally shockless. She is standing beside me along the sun-baked shoulder of a two-lane country highway, and we are both staring down into the drainage ditch. At the bottom a...',uid:'2'},
        { name:'Hardik Kumar', text:'I met the love of my life at someone else’s prom.He wasn’t my date.My date was a lovely young woman whose name I can’t remember. What I do remember is that her dress was blue the way Southern debutantes in movies always wear blue dresses. At least from the movies I’ve seen. It was blue, but not puffy, and I was grateful for that. I’m resistant to puffy. Puffy and poofy. I can’t tolerate either.We attended her senior prom together, because her boyfriend had just broken up with her the w...',uid:'3'},
        { name:'Rohit Singh', text:'I remember our first cigarettes together were Rothmans, middle tar, with a filter, of course. It was ten o’clock on a Saturday night and we were attending a local church’s youth club disco. I recall that she’d gone outside for a breath of air.God, I could do with a gasper, she’d said, avoiding my gaze, as if we were on stage and I’d forgotten my lines while searching for a prop. I groped around inside my jacket for my pack of Rothmans. My awkward fumbling attracted her attention, and she smiled as I raised my head. She ...',uid:'4'},
        { name:'Arsh Guleria', text:'A mom’s job is never truly finished—Elise knew this instinctively when her son was born. For at least the hundredth time, she sat next to his bed in that chair mending his quilt. There was no way of knowing, the day she bought it at a flea market, that it would become her son’s most valued possession. To call it a quilt stretched the definition as it was nothing more than a thousand pieces of oddly shaped swatches stitched together, layer after layer, until the whole of it was thick enough to hold in the warmth...',uid:'5'}])
    // const [profileData, setProfileData] = useState([])
	// const profileUserName = collection(db,'feed');
	// getDocs(profileUserName)
	// 	.then((snapshot) => {
	// 		let names = [];
	// 		snapshot.docs.forEach((doc) =>{
	// 			names.push({...doc.data(), id: doc.id})
	// 		})
	// 		console.log(names)
    //   setProfileData(names)
	// 	})
	// 	.catch(err =>{
	// 		console.log(err.message)
	// 	})
    const data = profileData.filter(task => task.uid === user);
    const userData = data[0]; 
    console.log(userData);
    return (
        <>    
            <section id="dashboard">
                <div className="row">
                    <div className="col-3 left">
                     <LeftMenu/>
                    </div>  
                    <div className="col-6 center">
                        <Script userName={userData.name} text={userData.text}/>          
                    </div>  
                    <div className="col-3 right">
                        <RightMenu/>
                    </div>  
                </div>
            </section>
        </>
    );
};

export default DashboardScript;