
import "./Projectmcbot.css"
import {UseState} from 'react'
import bg1 from "../images/bg1.jpg"
import Navbar from "../Navbar";
import Footer from "../Footer";


function Projectmcbot() {


  

    function dll(){

        console.log("ye")

    }


 
    return (
      <div className="Hero">

          <Navbar></Navbar>
                
        <div className="child1">
            <div className="thepara1">
            <img src={bg1} className="pc1"></img>
            <p className="longp1"> dqwqeqsdasadqwehhhhhhhhhhhhqlwsdjioqsjdcpijsdocjnew qwoijepqskdfcqadjm oiqwjdpoqskd,oüjkwnasnd askdkqopwkdoqjwioedqaskdmiqwsdmfq oqiwjepqosdkopq dwf qioweqposkdcq ewfdqnmpdkqsd xcqwedqpwkds</p>
            </div>
            <br></br><br></br>
            <div className="theparas">
            <p className="longp"> qweqiehnuioqwnhdoqansd wqioejqwidnfqöw wioqejqisdjyxd iqwejqiosdk qwjeiq qw9ejqsdmqasdq jweijqsdija+dewksqiqgjnqwe owqjepoqwse+dqwposdmaxd wqjeqaskdqkwrfio</p>
            <p className="longp"> qweqiehnuioqwnhdoqansd wqioejqwidnfqöw wioqejqisdjyxd iqwejqiosdk qwjeiq qw9ejqsdmqasdq jweijqsdija+dewksqiqgjnqwe owqjepoqwse+dqwposdmaxd wqjeqaskdqkwrfio</p>
            <p className="longp"> qweqiehnuioqwnhdoqansd wqioejqwidnfqöw wioqejqisdjyxd iqwejqiosdk qwjeiq qw9ejqsdmqasdq jweijqsdija+dewksqiqgjnqwe owqjepoqwse+dqwposdmaxd wqjeqaskdqkwrfio</p>
            </div>

            <div>
            <a href={bg1} download>
                <button onClick={dll}>DOWNLOAD FILE</button> </a>

            </div>
        </div>


        <Footer></Footer>
      </div>
      
    );
  }
  

  


  export default Projectmcbot;