
import "./Services.css"
import pc1 from "./images/icoms/projects2.png"
import pc2 from "./images/icoms/webdev.png"
import pc3 from "./images/icoms/gd.png"
import {Link} from "react-router-dom"

function Services() {


  const linkStyle = {
    
    textDecoration: "none",
    color: "white"
    
  };
    return (




      <div className="service">
                
        <div className="services">

           <Link to="/projects" style={linkStyle}> <div className="Service1">
                <div className="s1l">
            <p className="p1"></p>
            <img className="i1" src={pc1}></img>
            </div>

            <div className="s1r">
            <p className="ptxt1">Python, Arduino, CAD and other shenanigans </p>

            </div>
            </div></Link>
            <Link to="/projects" style={linkStyle}>
            <div className="Service2">
                <div className="cl1">
            <p className="p2"></p>
            <img className="i2" src={pc2} ></img></div>
            <div className="cl2">
            <p className="ptxt2">HTML, CSS, JS, MYSQL and React.js</p></div>
            </div>  </Link>

            <Link to="/graphicdesign" style={linkStyle}>
            <div className="Service3">
            <div className="s3l">
            <p className="p3"></p>
            <img className="i3" src={pc3}></img></div>

            <div className="s3r">
            <p className="ptxt3">My months spent in Adobe Illustrator</p>
            </div>
            </div></Link>
        
        </div>
      </div>
      
    );
  }
  
  export default Services;
  