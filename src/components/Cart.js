import React from 'react'
import './Cart.css'
import pc1 from "./images/gears.jpg"
import { useState, useEffect } from 'react'
import picture2 from "./images/icoms/Teepublic.png"
import { func } from 'prop-types'

export default function Cart({open,children,pro1,pro2}) {

  const ted = "./images/gears.jpg"

   
  let  bongo = pro2
  bongo = bongo.sort()
   console.log(bongo)

        const counter = null;
        const vals =null;


        function poppy(sum){

                var sum = bongo.Price.reduce(function(a, b){
                        return a + b;
                    }, 0);

        }

     if (!open) return null

    if(bongo.length ==0){
            return(<h1>Nothing in here</h1>)
                } 
                if(bongo.length >=1 )  {     
    return (


                <>
            <div className="listec">
                    {bongo.map((bongoval) =>{

                            return <div className="bundle">
                            <h3>{bongoval.name}</h3> 
                            <h3>{bongoval.Price}</h3> 
<h3> {poppy}</h3>
                            <p>{bongoval.texty}</p>
                         
                            </div>


                    })}

            </div>

                    

                        </>
    )}
  
}
