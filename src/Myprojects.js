
import CommentOP from "./components/CommentOP";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

import './index.css'
import Upsidedivider from "./components/Upsidedivider";

function Mypro() {
    return (
      <div className="Myp">
        
        <Navbar  />
        <div id="navnavbar"></div>
        <Projects />
       
        <Upsidedivider />
         <Footer />
      </div>
    );
  }
  
  export default Mypro;