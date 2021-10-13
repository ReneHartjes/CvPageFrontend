
import "./Banner.css"
import Navbar from "./Navbar";

import pc2 from "./images/bg1.jpg"
import {Link} from 'react-router-dom'
import bgvid from "./images/icoms/bgvid.mp4"
import SearchBar from "./Searchbar";
import {useState} from 'react'
import data from './Data.json'



  
function Banner() {
  
  
  
  const [click, clicker] = useState(false)
  

  function staty(){
    clicker(true)
  }

  if (click) {
  return(
    <div id="pipipopo">


    <Link to="/"><button className="clickbtn">Start</button> </Link>
    <Link to="/projects"><button className="clickbtn">About</button> </Link>
    <Link to="/projects"><button className="clickbtn">Projects</button></Link>
    <Link to="/comments"><button className="clickbtn">Guestbook</button></Link>
    
    </div>)
  
  }
    return (
    
      



    <div className="bannercontainer">
      
      <button id="themenu" onClick={()=>clicker(true)}>Menu</button>
      
      <div className="navnav">
      <ul>
        <li><Link to="/">Welcome</Link>
        <ul id="pops">
         
         <li id="pops"><Link to="/">Pro1</Link></li>

       </ul></li>
        <li><Link to="/projects"><a id="projs">Projects</a></Link>
        <ul className="shnu2">
         <br></br>
        <li><Link to="graphicdesign"><a href="">Graphicdesigns</a></Link></li>
        <li><Link to="/projects"><a href="">Programming</a></Link></li>
        <li><Link to="/projects"><a href="">Webdevelopment</a></Link></li>
        <li><Link to="/projects"><a href="">CAD,Robotics</a></Link></li>
      </ul></li>
        <li><Link to="/"><a id="weirdo"href="">About</a></Link>
            
        <ul id="shnu">
         <br></br>
         <li><Link to="/cvpage">CV</Link></li>
         <li><Link to="/cvpage"><a href="">Contact</a></Link></li>
      
       </ul>
        
        </li>
        <li><Link to="/comments"><a id="weirdo3" href="">Guestbook</a></Link></li>
        </ul>
       </div>

        <div className="Searchysearch">
        <SearchBar data={data} />
        </div>


        <div id="videoclass">     
        <video  muted loop autoPlay>      
        <source src={bgvid} type="video/mp4" />  
       </video></div>
      
      
       <div className="welcomecontainer">
          <div className="welcometxt">
            <h1>Welcome</h1>
            <br></br>
            <p> this page is build as SPA in React.js with Node.js/Mysql Backend.</p>
            <p> Additionally a little overview of my plentiful doings</p>
            </div>
     
            
            </div>


   </div> 
   
   )

  }
  
  export default Banner;
  