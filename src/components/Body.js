
import "./Body.css"
import pc1 from "./images/gears.jpg"
import pc2 from "./images/bg1.jpg"

function Body() {
    return (
      <div className="services">




                       
          <div className="pic1con">
            <div className="links"> <a href=""> 
            <img src={pc1} className="pic2" alt="service_image" />
            </a>
            </div>

            <div className="rechts">
              <h3 className="sub_title">Software </h3>
            <p>I love tech and did my time in multiple different areas of tech all around Robotics and Computer-science. Including multiple projects in Python with imageprocessing and Speechrecognition, or Arduino with Bluetooth and Pyserial communication</p>

            </div>

          </div>

          <div className="pic2con">
          <div className="links2"> <a href="/projects">
            <img src={pc2} className="pic2" alt="service_image" />
           </a>
            </div>
            <div className="rechts2"> 
            <h3 className="sub_title">Webdevelopment</h3>
            <p>I am a webdeveloper where this Page is one of a few projects Ive been working on. I prefer working in React with JSX, JS, CSS(vanilla) and HTML. For my Backend I use Node, Express and a Mysql-DB</p>
            </div>
          </div>
      </div>
      
    );
  }
  
  export default Body;
  