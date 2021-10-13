import React from 'react'
import {useState} from  'react'
import './Modal.css'


export default function Modal({opener}) {
    
    


    
    
    return (
        <div className="modalbg" onClick ={()=> opener(false)}>
            <div className="modaltxt">



                <h3>Annoying Modal</h3>
                

                <p> Welcome, and thank you for your visit.</p>

                <button onClick ={()=> opener(false)}>Acknowledge</button>

                

            </div>
            
        </div>
    )
}
