import React from 'react'
import './Navbar2.css'
import { Link } from 'react-router-dom';
import {useState} from 'react'

function Navbar2() {


    // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
const [moody,setmoody] = useState(true)
const [moody2,setmoody2] = useState(true)

// Get the navbar
var navbar = document.getElementById("navbar2");
var wrapper = document.getElementById("wrppr")


var sticky = 650


function myFunction() {
    if(window.pageYOffset <640){
        wrapper.style="display:none;"

    }else{
        wrapper.style="display:flex;"
    }
 


  if (window.pageYOffset >= sticky) {
      
    navbar.classList.add("sticky")
    
  } else {
     
    navbar.classList.remove("sticky");
    
  }}


  if(moody){
    return (
        <div>
            <div className="navwrapper" id="wrppr">
                <image></image>
                <nav id="navbar2">

                    <ul>
                        <li><Link to="/"><a href="#">Home</a></Link></li>
                        <li><Link to="/projects"><a href="#">Projects</a></Link></li>
                        <li><Link to="/cvpage"><a href="#">Cv-Page</a></Link></li>
                        <li><Link to="/comments"><a href="#">Guestbook</a></Link></li>
                    </ul>


                </nav>
            </div>
        </div>
    )}else{return <h1>nono</h1>}
}

export default Navbar2
