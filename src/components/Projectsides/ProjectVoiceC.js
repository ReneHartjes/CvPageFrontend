
import "./Projectmcbot.css"
import {UseState} from 'react'
import bg12 from "../images/Rating/githubber.png"
import bg22 from '../images/arduino.png'
import Navbar from "../Navbar";
import Footer from "../Footer";


function ProjectVoiceC() {


  

    function dll(){

        console.log("ye")

    }


 
    return (
      <div className="Hero">

          <Navbar></Navbar>
                
        <div className="child1">
            <div className="thepara1">
            <h2> Voicecontrolled LED panel </h2>
            <img src={bg22} className="pc1"></img>

            
            
            <p className="longp1"> This cool Project is a combination of the Arduino IDE and a controlling Python-Pyserial script under usage of Google-SR. the script recognizes "Grün","Blau" usw and lights up the according LED </p>
            <h3></h3>
            </div>
            
            <div className="theparas">
            <h3>Python libraries</h3>
            <p className="longp">
            PySerial,
            Time, 
            Speechrecognition,</p>

           
            </div>

            <div className="gitclass">
              <h4> Code on Github: </h4>
            <a href="https://github.com/ReneHartjes/VoiceControlled-LEDs/blob/main/main.py">
                <img src={bg12}></img> </a>

            </div>
        </div>


        <Footer></Footer>
      </div>
      
    );
  }
  

  


  export default ProjectVoiceC;