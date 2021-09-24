import React from 'react'
import {useState} from  'react'
import './Modal.css'


export default function Modal({opener}) {
    
    


    
    
    return (
        <div className="modalbg" onClick ={()=> opener(false)}>
            <div className="modaltxt">



                <h3>Annoying Modal</h3>
                

                <p> I dont want cookies or anything, just wanna annoy you with this semi-cool modal</p>

                <button onClick ={()=> opener(false)}>Close</button>

            </div>
            
        </div>
    )
}
