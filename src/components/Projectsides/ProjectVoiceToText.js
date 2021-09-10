
import "./Projectmcbot.css"
import {UseState} from 'react'
import bg12 from "../images/Rating/githubber.png"
import bg22 from '../images/voicetext.png'
import Navbar from "../Navbar";
import Footer from "../Footer";


function ProjectVoiceToText() {


  

    function dll(){

        console.log("ye")

    }


 
    return (
      <div className="Hero">

          <Navbar></Navbar>
                
        <div className="child1">
            <div className="thepara1">
            <h2> Voice to text in Python </h2>
            <img src={bg22} className="pc1"></img>

            
            
            <p className="longp1"> This project is a rudimentary try to get a device which loggs everythin I say, But without some Deeplearning-Model with Trainingsdata for my voice it always will be just an approach </p>
            <h3></h3>
            </div>
            
            <div className="theparas">
            <h3>Python libraries</h3>
            <p className="longp">
           
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
  

  


  export default ProjectVoiceToText;