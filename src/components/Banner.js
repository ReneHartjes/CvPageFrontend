
import "./Banner.css"
import Navbar from "./Navbar";

import pc2 from "./images/bg1.jpg"
import {Link} from 'react-router-dom'

import {useState} from 'react'



  
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
      <div className="container">

  


<div className="mainnav">
          <div id="thealt">
          <div id="pipipopo">
    <Link to="/"><button className="clickbtn">Start</button> </Link>
    <Link to="/projects"><button className="clickbtn">About</button> </Link>
    <Link to="/projects"><button className="clickbtn">Projects</button></Link>
    <Link to="/comments"><button className="clickbtn">Guestbook</button></Link>
    
    </div>
            
          </div>
          <ul>
        <li><Link to="/">Welcome</Link>
        <ul id="pops">
         
         <li id="pops"><Link to="/">Pro1</Link></li>

       </ul></li>
        <li><Link to="/projects"><a id="projs">Projects</a></Link>
        <ul className="shnu2">
         <br></br>
        <li><Link to="graphicdesign">Graphicdesigns</Link></li>
        <li><Link to="/projects"><a href="">Programming</a></Link></li>
        <li><Link to="/projects">Webdevelopment</Link></li>
        <li><Link to="/projects"><a href="">CAD,Robotics</a></Link></li>
      </ul></li>
        <li><Link to="/"><a href="">About</a></Link>
            
        <ul id="shnu">
         <br></br>
         <li><Link to="/">CV</Link></li>
         <li><Link to="/projects"><a href="">Contact</a></Link></li>
      
       </ul>
        
        </li>
        <li><Link to="/comments"><a href="">Guestbook</a></Link></li>
        </ul>

        <div className="ept"></div>
        
    </div>
     



        <div className="welcomecontainer">
          <div className="welcometxt">
            <h1>Welcome and good day</h1>
            <br></br>
            <p> this page is build as SPA in React.js with Node.js/Mysql Backend.</p>
            <p> Additionally a little overview of my plentiful doings</p>
            </div>
     
            
            </div>
      </div>
      
      
    );
  }
  
  export default Banner;
  