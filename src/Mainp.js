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
import Modal from "./components/Modal";
import Realslimslider from "./components/Realslimslider";
import {useState, useEffect} from 'react'
import Divider from "./components/Divider";
import Upsidedivider from "./components/Upsidedivider";
import Quiz from "./components/Projectsides/Quiz";

function Mainp() {

  const [modaly,setmodaly] = useState(false)
  useEffect(() => {


    setTimeout(setmodaly(true), 7000);

  },[])
  return (
    <div className="Mainp">
  
    <Banner />
    
    <Body />
    
    <Services className="servicescl" />
    <Divider />
    <Realslimslider />
    <News />
    
    
    <Fetchi />

    
    
    
    {modaly && <Modal opener = {setmodaly}/>}


   

    <Upsidedivider />
    
    <Footer />

      
    </div>
  );
}

export default Mainp;
