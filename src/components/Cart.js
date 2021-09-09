import React from 'react'
import './Cart.css'
import pc1 from "./images/gears.jpg"
import pc2 from "./images/Gallery/pic1.png"
import { useState, useEffect } from 'react'
import picture1 from "./images/icoms/Teepublic.png"
import { func } from 'prop-types'

export default function Cart({open,children,pro1,pro2}) {

  const ted = "./images/gears.jpg"

   
  let  bongo = pro2
  bongo = bongo.sort()
   console.log(bongo)

        const counter = null;
        const vals =null;




     if (!open) return null

    if(bongo.length ==0){
            return(<h1 id="nuffin">Nothing in your "Cart" </h1>)
                } 
                if(bongo.length >=1 )  {    
                        
                        
                        function cook(){
                                
                                const bla = pro2.id
                                if(bla==1){

                                      console.log(bla)
                                }

                                if(bla==2){

                                        console.log(bla)
                                }

                                if(pro2.id==3){

                                        console.log(bla)
                                }

                                if(bla==4){
                                        console.log(bla)
                                }

                                if(pro2.id==5){

                                        console.log(bla)
                                }

                                if(pro2.id==6){

                                        console.log(bla)
                                }
                        }
    return (


                <>
            <div className="listec">
                    {bongo.map((bongoval) =>{

                            return <div className="bundle">
                            <h3>{bongoval.name}</h3> 
                            <h3>{bongoval.Price}</h3> 
                            
                                {cook()}               
                            <p>{bongoval.texty}</p>
                         
                            </div>


                    })}

            </div>

                    

                        </>
    )}
  
}
