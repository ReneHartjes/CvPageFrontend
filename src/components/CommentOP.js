import './CommentOP.css'
import { useState, useEffect } from 'react';
import Axios from "axios"
import profilepic from "./images/profilepic.png"


function CommentOP() {






  const[name, changename]=useState('')
  const[msgs, changemsgs]= useState('')
  const[cmt,changecmt]= useState([])

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response) =>{
      console.log(response.data)
      changecmt(response.data)
    })

  }, [] )


  function submitrev(){
    
    Axios.post("http://localhost:3001/api/insert",{namess:name, msgss:msgs})
    window.location.reload();
    
  }


  return (
    <div className="cmtcontainer">

      <div className="Ipsec">
        
        <div className="inputc">
          
        <div className="toppy">
          <br></br>
          <h2> Leave a comment: </h2>
        <label id="lblcn"> Name:</label> 
        
        <br></br>
      <input type="text" name="ipname" className="name" onChange={(e) => {changename(e.target.value)}}/>
      </div></div>
      
      <br></br>
      <label className="lblc">Message:</label>
        <div className="inputct">
      
      <input type="text" name="textmsg" className="msg" onChange={(e) => {changemsgs(e.target.value)}}/>
      </div>
      
      <div className="btnc">
      <button className="btn" onClick={submitrev}>Submit</button></div>
    </div>
      <br></br>
        <div className="cmst">
        {cmt.map((val) => {
          return (
            <div className="wholepack"> 
            <div className="uid"> <h2>{val.userid} schrieb:</h2></div> 
            
            <div className="date"><h4>{val.datern} </h4></div> 
          
            <div className ="texts"><p className="para">{val.usertext} </p></div>
            </div>
          )
         

        } )}
        
        </div> 
     
    </div>
  );
}

export default CommentOP;
