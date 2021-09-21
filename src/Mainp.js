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
import Slider from "./components/Slider";
import data from './components/Data.json'
import "./index.css"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import SearchBar from "./components/Searchbar";
import Fetchi from "./components/Fetchi";

function Mainp() {
  return (
    <div className="Mainp">
  
    <Banner />
    
    <Body />
    <Welcometext />
    <Services className="servicescl" />
    
    <News />
    
    
    <Fetchi />

    <Footer />

      
    </div>
  );
}

export default Mainp;
