import './CommentOP.css'
import { useState, useEffect } from 'react';
import Axios from "axios"
import profilepic from "./images/profilepic.png"


function CommentOP() {






  const[name, changename]=useState('')
  const[msgs, changemsgs]= useState('')
  const[cmt,changecmt]= useState([])
  const[username, setusername] = useState("")
  const[usertext, setusertext] = useState("")
  const [listy, setlisty] = useState([]);

  useEffect(()=>{
  Axios.get("http://46.101.163.85/read").then((response) =>{
      
      
     console.log(response)

     setlisty(response.data)
    })

  }, [] )

  const deletepost = async  (id) => {

   await Axios.delete(`http://46.101.163.85/delete/${id}`) 
   .then (window.location.reload())
   
  };



  async function submitrev() {
    
    await Axios.post("http://46.101.163.85/api", {
      username: username,
      usertext: usertext,
    }).then((response) => {
      setlisty([
        ...listy,
        { username: username, usertext: usertext },
      ]);
    }).then(window.location.reload());
    
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
      <input type="text" name="ipname" className="name" onChange={(e) => {setusername(e.target.value)}}/>
      </div></div>
      
      <br></br>
      <label className="lblc">Message:</label>
        <div className="inputct">
      
      <textarea type="text" name="textmsg" className="msg" onChange={(e) => {setusertext(e.target.value)}}/>
      </div>
      
      <div className="btnc">
      <button className="btn2" onClick={submitrev}>Submit</button></div>
    </div>
      <br></br>
        <div className="cmst">
        {listy.map((val) => {
          return (
            <div className="wholepack"> 
            <div className="uid"> <h2>{val.username} schrieb:</h2></div> 
            
            <div className="date"><h4>::::: </h4></div> 
          
            <div className ="texts"><p className="para">{val.usertext} </p></div>
            <button
                id="removeBtn"
                onClick={(id) => {
                  deletepost(val._id);
                }}
              >
                X
              </button>

            </div>
          )
         

        } )}
        
        </div> 
     
    </div>
  );
}

export default CommentOP;
