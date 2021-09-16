import React from 'react'
import './MyCVpage.css'
import cvimg from './images/Gallery/profilpic.png'
import Navbar from './Navbar'
import { useState } from 'react'
import Footer from './Footer'
import Cvpopup from './Projectsides/Cvpopup'
import ssh from './images/icoms/sshrt1.png'
import rb from './images/icoms/rbfin.png'
import tpb from './images/icoms/Teepublic.png'
import gth from './images/Rating/githubber.png'
export default function MyCVpage() {

    const [blub, setblub] = useState(false)

    if(blub){ 

       const bl= document.getElementById("opener")
       bl.style ="display:none"
      
    }



    return (
        <>
        <Navbar />
        <div className="cvcontainer2">
            <div className="cvimgclass">
            <img src={cvimg}></img>
            <p>My Name is Rene and I am a...</p>
            <h3>React Frontend-developer</h3>
            </div>


            <div className="cvtxtclass1">
                <div className="cvtxtsub1">
          
                <h2 id="h2topper">About me:</h2>

           
            <p>I am a Mechanical engineering student from Germany who enjoys doing rather computer-science than engineering. I love programming in any kind of setting, if in TIA-Portal for Automatisation and IoT(Industry 4.0), in Pycharm, VScode or simply as a Html,Css,JS file-combination in a folder. I am doing this for quiet some time and can meanwhile show, thanks to my studies as well as self interest, a diverse range of technical background and know-how</p>

            <div className="thelanguages">
            <div className="pack1">
            <h2>Languages</h2>
            <p>English  - Fluent</p>
            <p>German   - mother tongue</p>
            <p>Dutch    - basics </p></div>

            <div className="pack2">
            <h2>Hobbies</h2>
            <p>Webdevelopment</p>
            <p>Softwaredevelopment</p>
            <p>Automatisation</p>
            <p>CAD and Graphicdesign</p>
            </div>
            </div></div>

            <div className="cvtxtsub2">
                <h2> My Skillset: </h2>
            <button id="opener" onClick={()=>setblub(true)}>CLICK TO OPEN</button>
            
            <Cvpopup opener= {blub} />
            
            
            </div>

            <div className="cvtxtsub3">

                <div className="cvtxtsub3links">

                    <h3> my Print-on-demand Ecom Pages </h3>
            <a href="https://www.redbubble.com/people/cutebutfunny/shop?asc=u"><img src={rb} className="picturelink"></img></a>
            <a href="https://www.teepublic.com/user/grimbo24"><img src={tpb} className="picturelink"></img></a>
            
      
            <a href="https://www.spreadshirt.de/shop/user/grimbo24/"><img src={ssh} className="picturelink"></img></a>
         </div>



            <div className="cvtxtsub3rechts">
                <h3> Github: </h3>
            <a href="https://github.com/ReneHartjes"><img src={gth} className="picturelink"></img></a>
            

                </div>
         </div>


            </div>
        </div>

        <Footer />
        </>
    )
}
