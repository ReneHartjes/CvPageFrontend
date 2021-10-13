
import "./Frameforcode.css"
import {useState} from 'react'

import fivestars from '../images/Rating/fivestars.png'
import fourhalfstars from '../images/Rating/fourhalfstar.png'
import fourstars from '../images/Rating/fourstar.png'
import threehalfstars from '../images/Rating/threehalfstar.png'
import threestars from '../images/Rating/threestar.png'
import twohalfstars from '../images/Rating/twohalfstar.png'
import twostars from '../images/Rating/twostar.png'
import Carttryzwei from "./Carttryzwei"






function Frameforcode() {


 
  const [Data,setData] = useState([])
  const [Locky,setLocky] = useState(false)
 
  

  function Buy(nr){


    
  
    if(nr==1){
  
      setData((Data => [...Data, " Kartoffel"]))
    }
    if(nr==2){
  
      setData((Data => [...Data, " Erdbeere"]))
    }
    if(nr==3){
  
      setData((Data => [...Data, " Tomaten"]))
    }
    if(nr==4){
  
      setData((Data => [...Data, " Bananen"]))
    }
    if(nr==5){
  
      setData((Data => [...Data, " Zitronen"]))
    }
    if(nr==6){
  
      setData((Data => [...Data, " Avocado"]))
    }
    if(nr==7){
  
      setData((Data => [...Data, " Watermellon"]))
    }
    if(nr==8){
  
      setData((Data => [...Data, " Raspberry"]))
    }
  
  
    console.log(Data)
  
  }



    return (
      <>

      <Carttryzwei props={Data} open={Locky}/>
      <div className="btndiv">
      <button onClick={()=>setLocky(true)} id="popper">opener</button>
      </div>
      <div className="frame1">

      


        <div className="smallwrap">

            <div className="col-4">

              <h5>HelloHello </h5>
              <img id="prodimg" src ="https://cdn.pixabay.com/photo/2018/05/29/23/18/potato-3440360_960_720.jpg"></img>
              <img src={fourstars} />
              <button onClick={()=>Buy(1)}> Buy! </button>

              <p>Awesome for the summer!</p>

            </div>

            <div className="col-4">

              <h5>HelloHello </h5>
              <img id="prodimg" src="https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755_960_720.jpg"></img>
              <img src={fourhalfstars} />
              <button onClick={()=>Buy(2)}> Buy! </button>
              <p>Awesome for the summer!</p>

            </div>

            <div className="col-4">

              <h5>HelloHello </h5>
              <img id="prodimg" src="https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356_960_720.jpg"></img>
              <img src={threestars} />
              <button onClick={()=>Buy(3)}> Buy! </button>
              <p>Awesome for the summer!</p>

            </div>

            <div className="col-4">

              <h5>HelloHello </h5>
              <img id="prodimg" src="https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_960_720.jpg"></img>
              <img src={fourstars} />
              <button onClick={()=>Buy(4)}> Buy! </button>
              <p>Awesome for the summer!</p>

            </div>

            
            <div className="col-4">

              <h5>HelloHello </h5>
              <img id="prodimg" src="https://cdn.pixabay.com/photo/2017/02/05/12/31/lemons-2039830_960_720.jpg"></img>
              <img src={fourhalfstars} />
              <button onClick={()=>Buy(5)}> Buy! </button>
              <p>Awesome for the summer!</p>

            </div>

            <div className="col-4">

              <h5>HelloHello </h5>
              <img id="prodimg" src="https://cdn.pixabay.com/photo/2015/08/10/12/02/avocados-882635_960_720.jpg"></img>
              <img src={fivestars} />
              <button onClick={()=>Buy(6)}> Buy! </button>
              <p>Awesome for the summer!</p>

            </div>

            <div className="col-4">

              <h5>HelloHello </h5>
              <img id="prodimg" src="https://cdn.pixabay.com/photo/2010/12/13/10/18/watermelons-2636_960_720.jpg"></img>
              <img src={fourstars} />
              <button onClick={()=>Buy(7)}> Buy! </button>
              <p>Awesome for the summer!</p>

            </div>


            <div className="col-4">

              <h5>HelloHello </h5>
              <img id="prodimg" src="https://cdn.pixabay.com/photo/2016/03/05/23/02/raspberries-1239435_960_720.jpg"></img>
              <img src={threehalfstars} />
              <button onClick={()=>Buy(8)}> Buy! </button>
              <p>Awesome for the summer!</p>

            </div>

            
        </div>
      </div>
        </>
    );


  
  }
  

  


  export default Frameforcode;