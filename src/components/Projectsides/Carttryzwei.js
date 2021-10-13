import React from 'react'
import './Frameforcode.css'

function Carttryzwei({props,open}) {

    if(!open){return null}



    return (
        <div className="carder">

            <div className="carderwrapper">
            <h3>{props}</h3>
            </div>
        </div>
    )
}

export default Carttryzwei
