
import "./Projectmcbot.css"
import {UseState} from 'react'
import bg12 from "../images/Rating/githubber.png"
import bg22 from '../images/stepper.png'
import Navbar from "../Navbar";
import Footer from "../Footer";


function ProjectStepper() {


  

    function dll(){

        console.log("ye")

    }


 
    return (
      <div className="Hero">

          <Navbar></Navbar>
                
        <div className="child1">
            <div className="thepara1">
            <h2> Steppermotor control</h2>
            <img src={bg22} className="pc1"></img>

            
            
            <p className="longp1"> sadly the Python-Projects got lost so just the Arduino-code here, Additionally there are some more little functionality Projects I did with my Arduino
            
            
            </p>
            <h3></h3>
            </div>
            
            <div className="theparas">
            <h3>Arduino IDE</h3>
            <p className="longp">
                written in C++
           </p>

           
            </div>

            <div className="gitclass">
              <h4> Code on Github: </h4>
            <a href="https://github.com/ReneHartjes/ArduinoFunctionalityProjects">
                <img src={bg12}></img> </a>

            </div>
        </div>


        <Footer></Footer>
      </div>
      
    );
  }
  

  


  export default ProjectStepper;