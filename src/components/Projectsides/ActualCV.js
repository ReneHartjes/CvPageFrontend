import React from 'react'
import Cvpopup from './Cvpopup'
import { useState } from 'react'
import './ActualCV.css'

export default function ActualCV() {



    const [blub, setblub] = useState(false)
    


    if(blub){
        document.getElementById("opener").style="display:none;"
    }

    

    return (
        <div className="cvcontainer">

           


            <div className="cvopener">
            <h2>Skillset:</h2>
            <button id="opener" onClick={()=>setblub(true)}>CLICKTOOPEN</button>
            
            
             <Cvpopup opener= {blub} />

            </div>



        </div>
    )
}
