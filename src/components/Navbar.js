import {Browserrouter, Link} from 'react-router-dom'
import {useState} from 'react'
import "./Navbar.css"
import Logo from "./images/Logo.png"




function Navbar() {
    return (
<div className="mainnav2">
          
          <ul>
        <li><Link to="/">Welcome</Link>
        <ul id="pops">
         
         <li id="pops"><Link to="/">Pro1</Link></li>

       </ul></li>
        <li><Link to="/projects"><a id="projs">Projects</a></Link>
        <ul>
         <br></br>
        <li><Link to="/graphicdesign">Graphicdesign</Link></li>
        <li><Link to="/projects"><a href="">Programming</a></Link></li>
        <li><Link to="/projects">Webdevelopment</Link></li>
        <li><Link to="/projects"><a href="">CAD,Robotics</a></Link></li>
      </ul></li>
        <li><Link to="/"><a href="">About</a></Link>
            
        <ul id="beep">
         <br></br>
         <li><Link to="/">CV</Link></li>
         <li><Link to="/projects"><a href="">Contact</a></Link></li>
      
       </ul>
        
        </li>
        <li><Link to="/comments"><a href="">Guestbook</a></Link></li>
        </ul>

       
        
    </div>
      
   
    );
  }
  
  export default Navbar;
  