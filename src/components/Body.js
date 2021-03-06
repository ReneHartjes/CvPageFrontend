
import "./Body.css"
import pc1 from "./images/gears.jpg"
import pc2 from "./images/bg1.jpg"
import {Link} from 'react-router-dom'

function Body() {
    return (
      <div className="services">


        <Link to ="/projects">

                       
          <div className="pic1con">
            
            <img src={pc1} className="pic2" alt="service_image" />
           
           

            <div className="rechts">
              <h3 >Projects </h3>
            <p>I love tech and did my time in multiple different areas of tech all around Robotics, Computer-science and Webdevelopment. Including multiple projects in Python with imageprocessing and Speechrecognition, or Arduino with Bluetooth and Pyserial communication</p>

            </div>

          </div></Link>
          <Link to ="/cvpage">
          <div className="pic2con">
         
            <img src={pc2} className="pic2" alt="service_image" />
          
           
            <div className="rechts2">
            <h3 className="sub_title">My CV</h3>
            <p>I am a webdeveloper where this Page is one of a few projects Ive been working on. I prefer working in React with JSX, JS, CSS/SASS and HTML. For my Backend I build a Node/Express RESTful-API with a Mysql-DB</p>
            </div>
          </div></Link>
      </div>
      
    );
  }
  
  export default Body;
  