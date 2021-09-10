
import "./Projectmcbot.css"
import {UseState} from 'react'
import bg12 from "../images/Rating/githubber.png"
import bg22 from '../images/afkbot.png'
import Navbar from "../Navbar";
import Footer from "../Footer";


function Projectafkbot() {


  

    function dll(){

        console.log("ye")

    }


 
    return (
      <div className="Hero">

          <Navbar></Navbar>
                
        <div className="child1">
            <div className="thepara1">
            <h2> Anti-AFK-Bot Python</h2>
            <img src={bg22} className="pc1"></img>

            
            
            <p className="longp1"> Little GUI-script which can be activated to trick the Anti-afk Systems of servers and simulate On-Keyboard behaviour in a randomly spaced keystroke pattern </p>
            <h3></h3>
            </div>
            
            <div className="theparas">
            <h3>Python libraries</h3>
            <p className="longp">
            Tkinter,
            Pyautogui,
            Time, 
            Keyboard,</p>

           
            </div>

            <div className="gitclass">
              <h4> Code on Github: </h4>
            <a href="https://github.com/ReneHartjes/Minecraft-Anti-AFK-with-GUI/blob/main/main.py">
                <img src={bg12}></img> </a>

            </div>
        </div>


        <Footer></Footer>
      </div>
      
    );
  }
  

  


  export default Projectafkbot;