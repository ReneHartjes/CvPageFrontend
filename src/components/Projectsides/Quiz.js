import {useState, useEffect} from 'react'
import './Quiz.css'
import data from './Quizdata.json'

function Quiz() {

        const [Que, setQue] = useState(data)
        const [Index, setindex] = useState(1)
        const [Points, setPoints] = useState(0)

        useEffect(() => {
            shuffl()
        }, [])

        console.log(Que)


        function shuffl(params) {
           
          const  bt1 = document.getElementById("btn1id")
          const  quest = document.getElementById("quest")
          const  bt2 = document.getElementById("btn2id")
          const bt3 = document.getElementById("btn3id")
          const  bt4 = document.getElementById("btn4id")
          const Pointss = document.getElementById("Pointss")

         let rdnr = Math.floor(Math.random() * 4)
           

            Pointss.innerText = Points
            quest.innerText = Que[Index].Question;
         if(rdnr == 0){
            bt1.innerText = Que[Index].Aw1;
            bt2.innerText = Que[Index].Aw2;
            bt3.innerText = Que[Index].Aw3;
            bt4.innerText = Que[Index].Aw4;
         }
         if(rdnr == 1){
            bt1.innerText = Que[Index].Aw1;
            bt2.innerText = Que[Index].Aw3;
            bt3.innerText = Que[Index].Aw2;
            bt4.innerText = Que[Index].Aw4;
         }
         if(rdnr == 2){
            bt1.innerText = Que[Index].Aw4;
            bt2.innerText = Que[Index].Aw2;
            bt3.innerText = Que[Index].Aw1;
            bt4.innerText = Que[Index].Aw3;
         }
         if(rdnr >= 3){
            bt1.innerText = Que[Index].Aw2;
            bt2.innerText = Que[Index].Aw1;
            bt3.innerText = Que[Index].Aw4;
            bt4.innerText = Que[Index].Aw3;
         }

            
        }



        function eval1() {
            
           let aw=  document.getElementById("btn1id").innerText
           let raw = Que[Index].Raw

            if(aw == raw){
                setPoints(Points+1)
                console.log(Points)
             
                if(Index >= 4){
                    setindex(0)
                }
                shuffl()
            }
            else{
          
            if(Index >= 4){
                setindex(0)
            }
            shuffl()}

          

        }
        function eval2() {
            

            let aw=  document.getElementById("btn2id").innerText
            let raw = Que[Index].Raw
 
             if(aw == raw){
                 setPoints(Points+1)
                 console.log(Points)
             
                 if(Index >= 4){
                    setindex(0)
                }else{
                 shuffl()}
 
              
 
             }

          
             if(Index >= 4){
                 setindex(0)
             }else{
             shuffl()}
            
             

        }
        function eval3() {
            
            let aw=  document.getElementById("btn3id").innerText
            let raw = Que[Index].Raw
 
             if(aw == raw){
                 setPoints(Points+1)
                 console.log(Points)
                 
                 if(Index >= 4){
                    setindex(0)
                }else{
                 shuffl()}
 
              
 
             }  
        
            
             if(Index >= 4){
                 setindex(0)
             }
             shuffl()
        }
        function eval4() {
            let aw=  document.getElementById("btn4id").innerText
            let raw = Que[Index].Raw
 
             if(aw == raw){
                 setPoints(Points+1)
                 console.log(Points)
               
                 if(Index >= 4){
                    setindex(0)
                }
                 shuffl()
                 
              
 
             }        
             
          
             if(Index >= 4){
                 setindex(0)
             }
             shuffl()
            
         

        }

    return (
        <div className="Quiz">
            
         


            <div className="quizcontainer">

                <section>
                   <h6 id="quest"></h6>
                   <h6 id="Pointss"></h6>
                </section>

                <div>
                    <button id="btn1id" onClick={eval1}></button>
                    <button id="btn2id" onClick={eval2} ></button>
                </div>
                <div>
                    <button id="btn3id" onClick={eval3}></button>
                    <button id="btn4id" onClick={eval4} ></button>
                </div>

                <button onClick={shuffl} > Next</button>

            </div>
            
        </div>
    )
}

export default Quiz
