import React from 'react'
import "./Slider.css"
import {useState} from 'react'
import {Link} from 'react-router-dom'
import pic1 from './images/Gallery/pic1.png'
import pic2 from './images/Gallery/pic2.png'
import pic3 from './images/Gallery/pic3.png'
import pic4 from './images/Gallery/pic4.png'
import pic5 from './images/Gallery/pic5.png'



export default function Slider(props) {




const [nrstate, setnrstate] = useState(1)
const [wobble, setwobble] = useState(0)


    

    function clicksy1(){
       

        setnrstate(1)
        props.changestate(1)
        setwobble(1)
        const c= document.getElementById("hvimg1")
        c.style= "animation: linear 1s pew;"
       
     
        
    }

    
    function clicksy2(){
       
        setwobble(0)
        console.log(wobble)
        setnrstate(2)
        props.changestate(2)
        const c= document.getElementById("hvimg1")
        c.style= "animation:  linear 1s pew1;"
    }
    function clicksy3(){
        

        setnrstate(3)
        props.changestate(3)
        const c= document.getElementById("hvimg1")
        c.style= "animation:  linear 1s pew;"
    }

    
    function clicksy4(){
       

        setnrstate(4)
        props.changestate(4)
        const c= document.getElementById("hvimg1")
        c.style= "animation: linear 1s pew1;"
    }
    function clicksy5(){
       

        setnrstate(5)
        props.changestate(5)
        const c= document.getElementById("hvimg1")
        c.style= "animation: linear 1s pew2;"
    }

    


    {if(nrstate==1){
            if(nrstate >=5){
                setnrstate(nrstate = 1)
            }
           

        return(
            
            <div className="sliderei">
                <button className="leftb" onClick={clicksy5}> -</button>
                <img id="kleiner" src={pic5}></img>
                <Link to="/graphicdesign"><img src={pic1} id="hvimg1"></img></Link>
                <img id="kleiner" src={pic2}></img>
                <button className="rightb" onClick={clicksy2}> -</button>
            </div>
        )
    }
    if(nrstate==2){
            
        if(nrstate >=5){
            setnrstate(nrstate = 1)
        }
       
    return(
        <div className="sliderei">
            <button className="leftb" onClick={clicksy1}> </button>
            <img id="kleiner" src={pic1}></img>
            <Link to="/graphicdesign"><img src={pic2} id="hvimg1"></img></Link>
            <img id="kleiner" src={pic3}></img>
            <button className="rightb" onClick={clicksy3}> </button>
        </div>
    )
    }
    if(nrstate==3){
        
        if(nrstate >=5){
            setnrstate(nrstate = 1)
        }
        
    return(
        <div className="sliderei">
            <button className="leftb" onClick={clicksy2}> </button>
            <img id="kleiner" src={pic2}></img>
            <Link to="/graphicdesign"><img src={pic3} id="hvimg1"></img></Link>
            <img id="kleiner" src={pic4}></img>
            <button className="rightb" onClick={clicksy4}> </button>
        </div>
    )
    }
    if(nrstate==4){

        if(nrstate > 5){
            setnrstate(nrstate = 1)
        }
    return(
        <div className="sliderei">
            <button className="leftb" onClick={clicksy3}> </button>
            <img id="kleiner" src={pic3}></img>
            <Link to="/graphicdesign"><img src={pic4} id="hvimg1"></img></Link>
            <img id="kleiner" src={pic5}></img>
            <button className="rightb" onClick={clicksy5}> </button>
        </div>
    )
    }
    if(nrstate==5){

        if(nrstate > 5){
            setnrstate(nrstate = 1)
        }
    return(
        <div className="sliderei">
            <button className="leftb" onClick={clicksy4}> </button>
            <img id="kleiner" src={pic4}></img>
            <Link to="/graphicdesign"><img src={pic5} id="hvimg1"></img></Link>
            <img id="kleiner" src={pic1}></img>
            <button className="rightb" onClick={clicksy1}> </button>
        </div>
    )
    }


    



    return (


        



        <div>
            

           
        </div>
    )
    }}
