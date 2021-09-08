import React from 'react'
import './Slider.css'

export default function Sliderthing({stater}) {
    if(stater==1){
        return(
            <div className="sliderclass">
            <button id="theone"></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            </div>

        )    
            }

    if(stater==2){
        return(
            <div className="sliderclass" >
            <button></button>
            <button id="theone"></button>
            <button></button>
            <button></button>
            <button></button>
            </div>

        )    
            }
    if(stater==3){
        return(
            <div className="sliderclass" >
            <button></button>
            <button></button>
            <button id="theone"></button>
            <button></button>
            <button></button>
            </div>

        )    
            }
    if(stater==4){
        return(
            <div className="sliderclass" >
            <button></button>
            <button></button>
            <button></button>
            <button id="theone"></button>
            <button></button>
            </div>

        )    
            }
    if(stater==5){
        return(
            <div className="sliderclass" >
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button id="theone"></button>
            </div>

        )    
            }
            
}
