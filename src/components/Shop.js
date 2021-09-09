import React from 'react'
import './Shop.css'
import picture1 from "./images/Logo.png"
import picture2 from "./images/icoms/python.png"
import { useState } from 'react'
import Cart from './Cart'

export default function Shop() {
    
    const [adder, addadder] = useState(0)
    const [isopen, setisopen]= useState(false)
    const [idee,setidee] =useState("Hello")
    
    const [pro2, setpro2] = useState([])
    const [pro1, setpro1] = useState(pro2.length)
    const [pro3, setpro3] = useState(1)

    function click1(){
        console.log("test")
        addadder(adder+1)
        
        setpro1(pro1+1)
        setpro2(pro2=>[...pro2,{id:1,name:"Tomatoe:yummy", Price: 17.99 ,texty: "Unterdurchschnittliche Tomaten für einen Wucherpreis"}])
       console.log(pro1)

    }

    function click2(){
    
        addadder(adder+1)
        setpro2(pro2=>[...pro2,{id:2,name:"Schuhe", Price: 39.99 ,texty: "This Shoes will help in no way!", imgsrc: "'./images/icoms/python.png'"}])
        console.log(pro2)
       
    }

    function click3(){
      
        addadder(adder+1)
        setpro2(pro2=>[...pro2,{id:3,name:"Besseres Telefon", Price: 79.99 ,texty: "This will make you smile!", imgsrc: {picture1}}])
        console.log(pro2)
       
    }
    function click4(){
      
        addadder(adder+1)
        setpro2(pro2=>[...pro2,{id:4,name:"Antique Relict", Price: 99.95 ,texty: "Some might say this is just a stone: but...",imgsrc: "./images/icoms/python.png"}])
        console.log(pro2)
       
    }
    function click5(){
     
        addadder(adder+1)
        setpro2(pro2=>[...pro2,{id:5,name:"Plastic bottle", Price: 14.95 ,texty: "Amazing Price for an outstanding device of modern science"}])
        console.log(pro2)
       
    }
    function click6(){
       
        addadder(adder+1)
        setpro2(pro2=>[...pro2,{id:6,name:"Stick", Price: 16.99 ,texty: "mostly will look a little different"}])
        console.log(pro2)
       
    }
    function click7(){
       
        addadder(adder+1)
        setpro2(pro2=>[...pro2,{id:7,name:"Paperclip", Price: 10.99 ,texty: "If you order three you will get 1 for free"}])
        console.log(pro2)
       
    }
    function click8(){
      
        addadder(adder+1)
        setpro2(pro2=>[...pro2,{id:8,name:"Rubberband", Price: 17.99 ,texty: "Surely does what Rubberbands do"}])
        console.log(pro2)
       
    }
    

    function shoppy(){

        setisopen(true)
        console.log({isopen})

    }
    function poppy(){

        window.location.reload();
    }

    return (



        <div className="Wholecontainer">
                <div id="headliner">
              <h1> This is A simple "Shop"   {idee.map}</h1> 
              <button onClick={()=>setisopen(true)}>Cart({adder})</button>
              <button onClick={()=>setisopen(false)}>minimize</button>
              <button onClick={poppy}>Empty Cart</button>
              
            </div>
            <Cart open={isopen} ids={idee} pro1={pro1} pro2={pro2} ></Cart>
    

        <div className="shopcontainer">
            <div id="pline1">
            <div id="prod1">
                   
                    <img id="img1" src="https://cdnprod.mafretailproxy.com/sys-master-root/h26/h7d/9913197887518/71610_main.jpg_1700Wx1700H"></img>
                    <div id="divone">
                    <h3 id="head1">Tomatoes</h3>
                    <p id="desc"> Fresh, Juicy, the classics who doesnt dream of these amazing fruits</p>
                    <div className="pricediv">
                    
                    <button onClick={click1}>add to cart</button><label> 17.99€</label>
                    </div>
                    </div>
                    
            </div>
            <div id="prod2">
                    
                    <img id="img2"  src="https://image.shutterstock.com/image-photo/old-shoes-260nw-284615858.jpg"></img>
                    <div id="divone">
                    <h3 id="head1">Shoes</h3>
                    <p id="desc"> Mint condition: these awesome shoes will carry you for a while, awesome offer</p>
                    <div className="pricediv">
                    
                    <button onClick={click2}>add to cart</button><label> 37.99€</label>
                    </div>
                    </div>
            </div>
            <div id="prod3">
                   
                    <img id="img3" src="https://uhrforum.de/attachments/103_1688-jpg.23868/"></img>
                    <div id="divone">
                    <h3 id="head1">Telephonia</h3>
                    <p id="desc"> Ring ring.. Or not, We really dont promise anything here. Awesome offer!</p>
                    <div className="pricediv">
                    
                    <button onClick={click3}>add to cart</button><label> 79.99€</label>
                    </div>
                    </div>
            </div>



            <div id="prod4">
                    
                    <img id="img4" src="https://www.aquasabi.de/media/image/product/19044/lg/back-to-nature-river-stone.jpg"></img>
                    <div id="divone">
                    <h3 id="head1">Antique Relict</h3>
                    <p id="desc"> Original Antique natural ceramic which is dated back a long time</p>
                    <div className="pricediv">
                    
                    <button onClick={click4}>add to cart</button><label> 99.95€</label>
                    </div>
                    </div>
            </div></div>

          


            <div id="pline2">
            <div id="prod5">
                   
                    <img id="img5" src="https://images.immediate.co.uk/production/volatile/sites/4/2018/08/GettyImages-183243429-19b6426.jpg?quality=90&resize=768,574"></img>
                    <div id="divone">
                    <h3 id="head1">Thermoplast</h3>
                    <p id="desc">This outstanding piece of art is a true eye catcher for anyone looking</p>
                    <div className="pricediv">    
                    <button onClick={click5}>add to cart</button>
                    <label> 14.95€</label>
                    </div>
                    </div>
            </div>
            <div id="prod6">
                   
                    <img id="img6" src="https://images.unsplash.com/photo-1615485020471-b66207f5e3bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RpY2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"></img>
                    <div id="divone">
                    <h3 id="head1">Naturalis</h3>
                    <p id="desc"> Unique multitool for any outdoor newcomer just the best</p>
                    <div className="pricediv">
                    
                    <button onClick={click6}>add to cart</button><label> 16.99€</label>
                    </div>
                    </div>
            </div>
            <div id="prod7">
                    
                    <img id="img7" src="https://images.freeimages.com/images/large-previews/c4d/paperclip-1426292.jpg"></img>
                    <div id="divone">
                    <h3 id="head1">Paperclip v0.3</h3>
                    <p id="desc"> The best of the best is still nothing against this outstanding product</p>
                    <div className="pricediv">
                    
                    <button onClick={click7}>add to cart</button><label> 10.99€</label>
                    </div>
                    </div>
            </div>
            <div id="prod8">
                  
                    <img id="img8" src="https://eu.evocdn.io/dealer/1048/content/media/rubberband.jpg"></img>
                    <div id="divone">
                    <h3 id="head1">Universal helper</h3>
                    <p id="desc"> this vulcanized polymere is save and perfect for anyone to use</p>
                    <div className="pricediv">
                    
                    <button onClick={click8}>add to cart</button><label> 17.99€</label>
                    </div>
                    </div>
            </div></div>
        </div></div>
    )
}
