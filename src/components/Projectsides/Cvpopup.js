import React from 'react'
import ActualCV from './ActualCV';
import './Cvpopup.css'
import fivestars from '../images/Rating/fivestars.png'
import fourhalfstars from '../images/Rating/fourhalfstar.png'
import fourstars from '../images/Rating/fourstar.png'
import threehalfstars from '../images/Rating/threehalfstar.png'
import threestars from '../images/Rating/threestar.png'
import twohalfstars from '../images/Rating/twohalfstar.png'
import twostars from '../images/Rating/twostar.png'


export default function Cvpopup({opener}) {

    if (!opener) {
        return null;
        
    }

    return (

        <div className="skillcontainer">


            <h3> Programming </h3>

            <div className="Proglang">
            <div className="skill1">	
                <h4>Html</h4>
                <img id="ratingimg" src={fourhalfstars}></img>
            </div>

            <div className="skill1">	
                <h4>CSS</h4>
                <img id="ratingimg" src={fourstars}></img>
            </div>

            <div className="skill1">	
                <h4>Javascript</h4>
                <img id="ratingimg" src={fourstars}></img>
            </div>

            <div className="skill1">	
                <h4>Python</h4>
                <img id="ratingimg" src={fourstars}></img>
            </div>
            <div className="skill1">	
                <h4>PHP</h4>
                <img id="ratingimg" src={twohalfstars}></img>
            </div>
            <div className="skill1">	
                <h4>SQL</h4>
                <img id="ratingimg" src={fourstars}></img>
            </div>
            <div className="skill1">	
                <h4>C/C++</h4>
                <img id="ratingimg" src={twostars}></img>
            </div>
            </div>
            <h3 id="rlskills">Related Skills</h3>
            <div>

            <div className="skill1">	
                <h4>CAD</h4>
                <img id="ratingimg" src={fourhalfstars}></img>
            </div>
            <div className="skill1">	
                <h4>Graphic Design</h4>
                <img id="ratingimg" src={fourstars}></img>
            </div>
                <div className="skill1">	
                    <h4>3D Printing</h4>
                    <img id="ratingimg" src={threehalfstars}></img>
                </div>

                        <div className="skill1">	
                        <h4>Arduino</h4>
                        <img id="ratingimg" src={threehalfstars}></img>
                    </div>

                    <div className="skill1">	
                        <h4>TIA portal</h4>
                        <img id="ratingimg" src={fourstars}></img>
                    </div>
        
                

            </div>




        </div>
    )
}
