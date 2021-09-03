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

        function piceval(){

                if(bongo.id == 1){

                        return (<img src={pc1} ></img>)

                        
                }

                
               }

     if (!open) return null

    if(bongo.length ==0){
            return(<h1>Nothing in here</h1>)
                } 
                if(bongo.length >=1 )  {     
    return (



            <div className="listec">
                    {bongo.map((bongoval) =>{

                            return <div className="bundle">
                            <h3>{bongoval.name}</h3> 
                            <h3>{bongoval.Price}</h3> 
                                {piceval}
                            <p>{bongoval.texty}</p>
                         
                            </div>


                    })}

            </div>

    )}
  
}
