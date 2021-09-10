

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

          <Link to="/voicetotext">
        <div className="proj1">
            <div>
            <h2>Speech Recognition, voice to text recorder(German)</h2>
            <img src={pc1} className="inbimg"></img>
            <p>This amazing little tool helps to a certain degree to bring Spoken text into printed words.</p></div>
            
        </div> </Link>

        <Link to="/arduinothings">   
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


      <Link to="/voicerec">
      <div className="proj4">
            <div>
            <h2>PYTHON/ARDUINO Voice-Recognition controlled LED-panel</h2>
            <img src={pc1} className="inbimg"></img> <img src={ard} className="inbimgcv" ></img>
            <p>This amazing Project including Google-Speechrecognition in Python and/or the Pocketsphinx-Library(Online/Offline), Py-Serial-Library my loved Arduino-uno and a my good old Circuitboard made me communicate to my PC what color Id love to see <a href="/mcbot"> ..See more</a> </p></div>
            
        </div> </Link>



        <Link to="/antiafk">   
        <div className="proj5">
           
        <h2>PYTHON Anti AFK script</h2>
        <img src={pc1} className="inbimg" ></img>
            <p>This little script is used maily in Minecraft to avoid the Afk-kick by pressing with the Help of PYAUTOGUI different Keys-strokes after a random amount of time</p>
           
        </div>  </Link>





        <Link to="/mcbot">
        <div className="proj6">
        <h2>PYTHON Minecraft Crate-picker</h2>
        <img src={pc1} className="inbimg"></img> <img src={ocv} className="inbimgcv"></img>
            <p>This is a little project made in Python which includes OpenCV-imageprocessing and Helps me to organize my Crates in Minecraft. Including a GUI made with TKinter and usage of a few further Python libraries <a href="/mcbot"> ..See more</a></p>
           
        </div> 

        </Link>
          </div>
      
      </div>
      
    );
  }
  

  


  export default Projects;
  