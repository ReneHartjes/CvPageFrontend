
import "./Projectmcbot.css"
import {UseState} from 'react'
import bg12 from "../images/Rating/githubber.png"
import bg22 from "../images/mcbot.png"
import Navbar from "../Navbar";
import Footer from "../Footer";


function Projectmcbot() {


  

    function dll(){

        console.log("ye")

    }


 
    return (
      <div className="Hero">

          <Navbar></Navbar>
                
        <div className="child1">
            <div className="thepara1">
            <h2>Minecraft Box-Picker </h2>
            <img src={bg22} className="pc1"></img>

            
            
            <p className="longp1"> this is the GUI of my Game-Bot-Project where my full boxes get emptied whilest I do something else in this time. My script takes a Screenshot and analizes if there are any Matches above a certain treshhold-propability with a Pre-given Picture-part if so my mouse Moves to the Position on the screen and clicks. </p>
            <h3></h3>
            </div>
            
            <div className="theparas">
            <h3>Python libraries</h3>
            <p className="longp">
            OpenCV,
            Pyautogui,
            Tkinter,
            Time, 
            Numpy,</p>

           
            </div>

            <div className="gitclass">
              <h4> Code on Github: </h4>
            <a href="https://github.com/ReneHartjes/BoxpickerPython/blob/main/main.py">
                <img src={bg12}></img> </a>

            </div>
        </div>


        <Footer></Footer>
      </div>
      
    );
  }
  

  


  export default Projectmcbot;