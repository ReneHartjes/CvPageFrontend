
import "./Projectmcbot.css"
import {UseState} from 'react'
import bg12 from "../images/Rating/githubber.png"
import bg22 from '../images/igpic.png'
import Navbar from "../Navbar";
import Footer from "../Footer";


function ProjectIclog() {


  

    function dll(){

        console.log("ye")

    }


 
    return (
      <div className="Hero">

          <Navbar></Navbar>
                
        <div className="child1">
            <div className="thepara1">
            <h2> Incognitologger </h2>
            <img src={bg22} className="pc1"></img>

            
            
            <p className="longp1"> This cool little tool was thought as a primitive way to concer the "concerned parents"-nieche as survailance where it is required. (making Screenshot every 5secs and evaluating it if any incognitoactivities are happening) </p>
            <h3></h3>
            </div>
            
            <div className="theparas">
            <h3>Python libraries</h3>
            <p className="longp">
            OpenCV,
            Pyautogui,
            Time, 
            Numpy,</p>

           
            </div>

            <div className="gitclass">
              <h4> Code on Github: </h4>
            <a href="https://github.com/ReneHartjes/Python-OpenCV-IncognitoLog/blob/main/main.py">
                <img src={bg12}></img> </a>

            </div>
        </div>


        <Footer></Footer>
      </div>
      
    );
  }
  

  


  export default ProjectIclog;