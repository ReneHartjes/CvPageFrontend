import Navbar from "./components/Navbar";
import Body from "./components/Body"
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Welcometext from "./components/Welcometext";
import News from "./components/News";
import Comments from "./components/Comments";
import Shop from "./components/Shop";
import CommentOP from "./components/CommentOP";
import ActualCV from "./components/Projectsides/ActualCV";
import "./index.css"
import {BrowserRouter, Switch, Route} from "react-router-dom"

function Mainp() {
  return (
    <div className="Mainp">
  
    <Banner />
    
    <Body />
    <Services />
    <ActualCV />
    <Shop></Shop>
    <Comments></Comments>
    <News />

    <Footer />

      
    </div>
  );
}

export default Mainp;
