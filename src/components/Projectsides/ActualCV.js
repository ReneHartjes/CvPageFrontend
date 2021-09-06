import React from 'react'
import Cvpopup from './Cvpopup'
import { useState } from 'react'

export default function ActualCV() {



    const [blub, setblub] = useState(false)
    


    if(blub){
        document.getElementById("opener").style="display:none;"
    }

    

    return (
        <div className="cvcontainer">

           



            <h2>Skillset:</h2>
            <button id="opener" onClick={()=>setblub(true)}>CLICKTOOPEN</button>
            <button id="closer"onClick={()=>setblub(false)} >Close</button>
            
             <Cvpopup opener= {blub} />





        </div>
    )
}
