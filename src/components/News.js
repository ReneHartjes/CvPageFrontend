
import "./News.css"

import {UseState} from 'react'
import Sshrt from "./images/icoms/sshrt1.png"
import rbs from "./images/icoms/rbfin.png"
import tpb from "./images/icoms/Teepublic.png"


function News() {


  
  function pillepalle(){
    console.log("1")
    
  


  }
    return (
      <>
      <div id="headlinec">
      <h3 id="headline">Here are my main Print-on-demand Design shops</h3>
      <div className="Newscontainer"></div>
         <div className="theTable">  
   

        <div className="Newest" id="stores">
            <a href="https://www.redbubble.com/people/cutebutfunny/shop?asc=u"><img src={rbs} className="picturelink"></img></a>
            <a href="https://www.teepublic.com/user/grimbo24"><img src={tpb} className="picturelink"></img></a>
            
      
            <a href="https://www.spreadshirt.de/shop/user/grimbo24/"><img src={Sshrt} className="picturelink"></img></a>
       </div>



       </div> 
      </div>
      </>
    );
  }
  

  export default News;