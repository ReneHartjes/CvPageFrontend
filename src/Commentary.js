
import CommentOP from "./components/CommentOP";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "./index.css"
import Upsidedivider from "./components/Upsidedivider";

function Commentary() {
    return (
      <div className="Myps">
      
        <Navbar />
        <CommentOP />
      <Upsidedivider />
        <Footer />
        
      </div>
    );
  }
  
  export default Commentary;