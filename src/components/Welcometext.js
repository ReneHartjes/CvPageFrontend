
import "./Welcometext.css"
import Slider from "./Slider";
import {useState} from 'react'
import Sliderthing from "./Sliderthing";


function Welcometext() {


  
  
  const [nrstate, setnrstate] = useState("1")


  

    
 
    return (
      <>
      <h2 id="headlineslider">My Graphic-design Merch Business</h2>
      <Slider changestate={nrstate => setnrstate(nrstate)}></Slider>
      <Sliderthing stater={nrstate} />
     
      </>
    );
  }
  

  export default Welcometext;