import {React, useState, Link, useEffect} from 'react'
import './Welcometext.css'
import data from './Database.json'
import Sliderthing from './Sliderthing'
import dividerss from './images/Gallery/divider2.png'
import headline from './images/Gallery/Designs.png'
export default function Realslimslider() {

    const [id, setid] = useState(1)
    useEffect(() => {


        decider();
    
      },id)
    
    const [id2, setid2] = useState(2)
    const [id3, setid3] = useState(3)


    const butter = './images/Gallery/pic1.png'
    console.log(data)

    function upwards(){

        document.getElementById(`btnid1`).style ="none"
        document.getElementById(`btnid2`).style ="none"
        document.getElementById(`btnid3`).style ="none"
        document.getElementById(`btnid4`).style ="none"
        document.getElementById(`btnid5`).style ="none"
        document.getElementById(`btnid6`).style ="none"
        document.getElementById(`btnid7`).style ="none"
        document.getElementById(`btnid8`).style ="none"
        document.getElementById(`btnid${id}`).style ="padding:10px; background-color: black;"

        if(id==1){
            setid(2)
            setid2(3)
            setid3(4)
        }
        if(id==2){
            setid(3)
            setid2(4)
            setid3(5)
        }
        if(id==3){
            setid(4)
            setid2(5)
            setid3(6)
        }
        if(id==4){
            setid(5)
            setid2(6)
            setid3(7)
        }
        if(id==5){
            setid(6)
            setid2(7)
            setid3(8)
        }
        if(id==6){
            setid(7)
            setid2(8)
            setid3(1)
        }  
        if(id==7){
            setid(8)
            setid2(1)
            setid3(2)
        }  
        if(id==8){
            setid(1)
            setid2(2)
            setid3(3)
        }  
    }


    function downwards(){

        const c = document.getElementById("im1")
        const d = document.getElementById("im2")
        const e = document.getElementById("im3")
        c.style="animation: linear 1s pew1;"
        d.style="animation: linear 1s pew1;"
        e.style="animation: linear 1s pew1;"
        document.getElementById(`btnid1`).style ="none"
        document.getElementById(`btnid2`).style ="none"
        document.getElementById(`btnid3`).style ="none"
        document.getElementById(`btnid4`).style ="none"
        document.getElementById(`btnid5`).style ="none"
        document.getElementById(`btnid6`).style ="none"
        document.getElementById(`btnid7`).style ="none"
        document.getElementById(`btnid8`).style ="none"
        document.getElementById(`btnid${id}`).style ="padding:10px; background-color: black;"


        if(id==2){
            setid(1)
           
            setid2(2)
            setid3(3)
        }
        if(id==3){
            setid(2)
            
            setid2(3)
            setid3(4)
        }
        if(id==4){
            setid(3)
           
            setid2(4)
            setid3(5)
        }
        if(id==5){
            setid(4)
            
            setid2(5)
            setid3(6)
        }
        if(id==6){
            setid(5)
          
            setid2(6)
            setid3(7)
        }
        if(id==7){
            setid(6)
           
            setid2(7)
            setid3(8)
        }  
        if(id==8){
            setid(7)
           
            setid2(8)
            setid3(1)
        }  
        if(id==1){
            setid(8)
            setid2(1)
           
            setid3(2)
        }  

    }

    function blow1(){
       
        document.getElementById("btnid1").style ="padding:10px; background-color: black;"
        document.getElementById("btnid2").style ="none"
        document.getElementById("btnid3").style ="none"
        document.getElementById("btnid4").style ="none"
        document.getElementById("btnid5").style ="none"
        document.getElementById("btnid6").style ="none"
        document.getElementById("btnid7").style ="none"
        document.getElementById("btnid8").style ="none"}


    function blow2(){
        document.getElementById("btnid2").style ="padding:10px; background-color: black;"
        document.getElementById("btnid1").style ="none"
        document.getElementById("btnid3").style ="none"
        document.getElementById("btnid4").style ="none"
        document.getElementById("btnid5").style ="none"
        document.getElementById("btnid6").style ="none"
        document.getElementById("btnid7").style ="none"
        document.getElementById("btnid8").style ="none"}
    
    
    
    function blow3(){
        document.getElementById("btnid3").style ="padding:10px; background-color: black;"
        document.getElementById("btnid1").style ="none"
        document.getElementById("btnid2").style ="none"
        document.getElementById("btnid4").style ="none"
        document.getElementById("btnid5").style ="none"
        document.getElementById("btnid6").style ="none"
        document.getElementById("btnid7").style ="none"
        document.getElementById("btnid8").style ="none"
    }
    function blow4(){
        document.getElementById("btnid4").style ="padding:10px; background-color: black;"
        document.getElementById("btnid1").style ="none"
        document.getElementById("btnid2").style ="none"
        document.getElementById("btnid3").style ="none"
        document.getElementById("btnid5").style ="none"
        document.getElementById("btnid6").style ="none"
        document.getElementById("btnid7").style ="none"
        document.getElementById("btnid8").style ="none"
    
    
    }

    function blow5(){
        document.getElementById("btnid5").style ="padding:10px; background-color: black;"
        document.getElementById("btnid1").style ="none"
        document.getElementById("btnid3").style ="none"
        document.getElementById("btnid4").style ="none"
        document.getElementById("btnid2").style ="none"
        document.getElementById("btnid6").style ="none"
        document.getElementById("btnid7").style ="none"
        document.getElementById("btnid8").style ="none"
    
    
    }
    function blow6(){
        document.getElementById("btnid6").style ="padding:10px; background-color: black;"
        document.getElementById("btnid1").style ="none"
        document.getElementById("btnid3").style ="none"
        document.getElementById("btnid4").style ="none"
        document.getElementById("btnid2").style ="none"
        document.getElementById("btnid5").style ="none"
        document.getElementById("btnid7").style ="none"
        document.getElementById("btnid8").style ="none"    
    

    }
    function blow7(){
            document.getElementById("btnid7").style ="padding:10px; background-color: black;"
            document.getElementById("btnid1").style ="none"
            document.getElementById("btnid3").style ="none"
            document.getElementById("btnid4").style ="none"
            document.getElementById("btnid2").style ="none"
            document.getElementById("btnid6").style ="none"
            document.getElementById("btnid5").style ="none"
            document.getElementById("btnid8").style ="none"
    
    
    }

    function blow8(){
        document.getElementById("btnid8").style ="padding:10px; background-color: black;"
        document.getElementById("btnid1").style ="none"
        document.getElementById("btnid3").style ="none"
        document.getElementById("btnid4").style ="none"
        document.getElementById("btnid2").style ="none"
        document.getElementById("btnid6").style ="none"
        document.getElementById("btnid7").style ="none"
        document.getElementById("btnid5").style ="none"}


    function decider(){

        if(id == 1){

            
       
                document.getElementById("btnid1").style ="padding:10px; background-color: black;"
                document.getElementById("btnid2").style ="none"
                document.getElementById("btnid3").style ="none"
                document.getElementById("btnid4").style ="none"
                document.getElementById("btnid5").style ="none"
                document.getElementById("btnid6").style ="none"
                document.getElementById("btnid7").style ="none"
                document.getElementById("btnid8").style ="none"
        }
        if(id == 2){

            
       
            document.getElementById("btnid1").style ="none"
            document.getElementById("btnid2").style ="padding:10px; background-color: black;"
            document.getElementById("btnid3").style ="none"
            document.getElementById("btnid4").style ="none"
            document.getElementById("btnid5").style ="none"
            document.getElementById("btnid6").style ="none"
            document.getElementById("btnid7").style ="none"
            document.getElementById("btnid8").style ="none"
        }

        if(id == 3){

            
       
            document.getElementById("btnid1").style ="none"
            document.getElementById("btnid2").style ="none"
            document.getElementById("btnid3").style ="padding:10px; background-color: black;"
            document.getElementById("btnid4").style ="none"
            document.getElementById("btnid5").style ="none"
            document.getElementById("btnid6").style ="none"
            document.getElementById("btnid7").style ="none"
            document.getElementById("btnid8").style ="none"
        }

        if(id ==4){

            
       
            document.getElementById("btnid1").style ="none"
            document.getElementById("btnid2").style ="none"
            document.getElementById("btnid3").style ="none"
            document.getElementById("btnid4").style ="padding:10px; background-color: black;"
            document.getElementById("btnid5").style ="none"
            document.getElementById("btnid6").style ="none"
            document.getElementById("btnid7").style ="none"
            document.getElementById("btnid8").style ="none"
        }
    
        if(id ==5){

            
       
            document.getElementById("btnid1").style ="none"
            document.getElementById("btnid2").style ="none"
            document.getElementById("btnid3").style ="none"
            document.getElementById("btnid4").style ="none"
            document.getElementById("btnid5").style ="padding:10px; background-color: black;"
            document.getElementById("btnid6").style ="none"
            document.getElementById("btnid7").style ="none"
            document.getElementById("btnid8").style ="none"
        }
    


    }


    return (
        <div className="thesliderwrapper">

                <div id="theheadid">
                        <img src={headline}></img>
                </div>


                        <div className="sliderei">
                <button className="leftb" onClick={downwards}> -</button>
                <img id="im1" src ={require(`./images/Gallery/pic${id}.png`).default}></img>
               <img id="im2" src ={require(`./images/Gallery/pic${id2}.png`).default}></img>
                <img id="im3" src ={require(`./images/Gallery/pic${id3}.png`).default}></img>
                <button className="rightb" onClick={upwards}> +</button>
            </div>
            <div className="btnline">

                <button id ="btnid1" onClick={()=>setid(1)+ setid2(2) +setid3(3) + blow1()}></button>
                <button id ="btnid2" onClick={()=>setid(2)+ setid2(3) +setid3(4)+ blow2()}></button>
                <button id ="btnid3" onClick={()=>setid(3)+ setid2(4) +setid3(5)+ blow3()}></button>
                <button id ="btnid4" onClick={()=>setid(4)+ setid2(5) +setid3(6)+ blow4()}></button>
                <button id ="btnid5" onClick={()=>setid(5)+ setid2(6) +setid3(7)+ blow5()}></button>
                <button id ="btnid6" onClick={()=>setid(6)+ setid2(7) +setid3(8)+ blow6()}></button>
                <button id ="btnid7" onClick={()=>setid(7)+ setid2(8) +setid3(1)+ blow7()}></button>
                <button id ="btnid8" onClick={()=>setid(8)+ setid2(1) +setid3(2)+ blow8()}></button>



            </div>

        </div>
    )
}
