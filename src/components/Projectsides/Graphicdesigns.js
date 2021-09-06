
import "./Graphicdesigns.css"
import {UseState} from 'react'
import pic1 from "../images/Gallery/pic1.png"
import pic2 from "../images/Gallery/pic2.png"
import pic3 from "../images/Gallery/pic3.png"
import pic4 from "../images/Gallery/pic4.png"
import pic5 from "../images/Gallery/pic5.png"
import pic6 from "../images/Gallery/pic6.png"
import pic7 from "../images/Gallery/pic7.png"
import pic8 from "../images/Gallery/pic8.png"
import pic9 from "../images/Gallery/pic9.png"
import stc from "../images/Gallery/Spreadst.png"

import Navbar from "../Navbar";
import Footer from "../Footer";


function Graphicdesigns() {


  



 
    return (
      <div className="gdframe1">

          <Navbar></Navbar>
          <div className="topsy">
              
                <h2>Graphic-Design</h2>
                <p> Here are some of my best sellers on the different Merch-Designer sites. I really enjoy doing Typography with public-domain fonts</p>
                
            </div>

        <div className="gallery">

            <div className="erstelinie">
            <a href><img src={pic1} className="gallerypic"></img></a>
            <a href><img src={pic2} className="gallerypic"></img></a>
            <a href><img src={pic3} className="gallerypic"></img></a>

            </div>
            

            <div className="zweitelinie">
            <a href><img src={pic4} className="gallerypic"></img></a>
            <a href><img src={pic5} className="gallerypic"></img></a>
            <a href><img src={pic6} className="gallerypic"></img></a>

            </div>

            <div className="drittelinie">
            <a href><img src={pic7} className="gallerypic"></img></a>
            <a href><img src={pic8} className="gallerypic"></img></a>
            <a href><img src={pic9} className="gallerypic"></img></a>

            </div>



        </div>
        <div className="headliner">
            <h2>Here is a little overview of my sales</h2>
            <p>it's not that much but surely a neat little passive incomesource</p></div>
        <div className="overview">
            
            <img src={stc} className="spimg"></img>

        </div>
        <Footer></Footer>
      </div>
      
    );
  }
  

  


  export default Graphicdesigns;