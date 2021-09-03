

import "./Projects.css"

import {UseState} from 'react'
import pc1 from "./images/icoms/pythonicon.png"
import ocv from "./images/icoms/opencvlogonb.png"
import ard from "./images/icoms/arduino.png"
import { Link } from "react-router-dom"

function Projects() {


  

  


  
    return (
      <div className="pj">
          <div className="Hero1"> 

          <Link to="/">
        <div className="proj1">
            <div>
            <h2>Project1</h2>
            <img src={pc1} className="inbimg"></img>
            <p>Thankful that I stumbled upon your channel! Your videos are exactly what I need. So far you and Mosh are the best teachers of programming world :D, Of course, I'll subscribe to your channel and will definitely browse at your videos. I'm pretty sure I'll learn a lot from you as you teach very well and not boring. *Still thankful to all teachers though for continuing posting tutorial videos.</p></div>
            
        </div> </Link>

        <Link to="/">   
        <div className="proj2">
           
        <h2>PYTHON/ARDUINO Bluetooth controlled Steppermotor</h2>
        <img src={pc1} className="inbimg" ></img> <img src={ard} className="inbimgcv" ></img>
            <p>This little Grabble came together whilest trying to control my Arduino with a HC05 bluetooth-connection. to</p>
           
        </div> </Link> 


        <Link to="/iclogger">

        <div className="proj3">
        <h2>PYTHON OpenCV Incognito-logger</h2>
        <img src={pc1} className="inbimg"></img> <img src={ocv} className="inbimgcv"></img>
            <p>This Python-script based on OpenCV scanns the screen every 5 seconds and starts recording screen Activities as soon as the incognito-mode gets activated. Cheeky little prog! :) </p>
           
        </div> </Link>   
        </div>   
      <div className="row2">
      <div className="proj4">
            <div>
            <h2>PYTHON/ARDUINO Voice-Recognition controlled LED-panel</h2>
            <img src={pc1} className="inbimg"></img> <img src={ard} className="inbimgcv" ></img>
            <p>This amazing Project including Google-Speechrecognition in Python and/or the Pocketsphinx-Library(Online/Offline), Py-Serial-Library my loved Arduino-uno and a my good old Circuitboard made me communicate to my PC what color Id love to see <a href="/mcbot"> ..See more</a> </p></div>
            
        </div> 

        <div className="proj5">
           
        <h2>PYTHON Anti AFK script</h2>
        <img src={pc1} className="inbimg" ></img>
            <p>This little script is used maily in Minecraft to avoid the Afk-kick by pressing with the Help of PYAUTOGUI different Keys-strokes after a random amount of time</p>
           
        </div> 

        <div className="proj6">
        <h2>PYTHON Minecraft Crate-picker</h2>
        <img src={pc1} className="inbimg"></img> <img src={ocv} className="inbimgcv"></img>
            <p>This is a little project made in Python which includes OpenCV-imageprocessing and Helps me to organize my Crates in Minecraft. Including a GUI made with TKinter and usage of a few further Python libraries <a href="/mcbot"> ..See more</a></p>
           
        </div> 
          </div>
      
      </div>
      
    );
  }
  

  


  export default Projects;
  