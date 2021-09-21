import React from 'react'
import {useEffect, useState} from 'react'
import data2 from './Database.json'
import './Fetchi.css'
import Axios from "axios"
export default function Fetchi() {
    const myKey = "39a9a737b07b4b703e3d1cd1e231eedc";
    
    const [loc,setlog] = useState([""])


            function checkweather(){try{{
                
                setlog(document.getElementById("weathercheck").value)
                console.log(loc)

                document.getElementById("errormsg").style ="display:none;"

                Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${myKey}`).then((response) =>{
                    console.log(response.data)
                    
                    if(response.data.name.length >= 2){
                        {console.log(response.data.length);document.getElementById('imgidsrc').innerText = "City: " + response.data.name;
                
                 document.getElementById('h4idsrc1').innerText= (Math.round(response.data.main.temp_max -273) +" °C MaxTemp");
                document.getElementById('h4idsrc2').innerText= (Math.round(response.data.main.temp_min -273) +" °C MinTemp");
                 document.getElementById('h3idsrc').innerText= ("Country: " + response.data.sys.country )}
                    }
                  })

}

            }catch(error){console.error(error)}}
    return (
        <div className="weatherwrapper">
            <div className="citycheck">
            <h2> Today's Weather- API</h2>
            <h5 > Type in a City for todays Temperature </h5>

                      <input type="text" id="weathercheck" />
            <button onClick={checkweather}></button>



            <div className="Outputdata">
            <p id="errormsg"> If error: Free-API is bust again, try in a little</p>
          <h3 id="imgidsrc"></h3>
             <h4 id="h3idsrc"> </h4>
            <h4 id="h4idsrc1"></h4> 
            <h4 id="h4idsrc2"></h4> 
            </div>
            </div>

  

        </div>
    )
}
