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
        setpro2(pro2=>[...pro2,{id:2,name:"Schuhe", Price: 39.99 ,texty: "This Shoes will help in no way!", imgsrc: "./images/icoms/python.png"}])
        console.log(pro2)
       
    }

    function click3(){
      
        addadder(adder+1)
        setpro2(pro2=>[...pro2,{id:3,name:"Besseres Telefon", Price: 79.99 ,texty: "This will make you smile!", imgsrc: "./images/icoms/python.png"}])
        console.log(pro2)
       
    }
    function click4(){
      
        addadder(adder+1)
        setpro2(pro2=>[...pro2,{id:4,name:"Antique Relict", Price: 299.95 ,texty: "Some might say this is just a stone: but...",imgsrc: "./images/icoms/python.png"}])
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
        setpro2(pro2=>[...pro2,{id:7,name:"Paperclip", Price: 7.99 ,texty: "If you order three you will get 1 for free"}])
        console.log(pro2)
       
    }
    function click8(){
      
        addadder(adder+1)
        setpro2(pro2=>[...pro2,{id:8,name:"Rubberband", Price: 9.99 ,texty: "Surely does what Rubberbands do"}])
        console.log(pro2)
       
    }
    

    function shoppy(){

        setisopen(true)
        console.log({isopen})

    }


    return (



        <div className="Wholecontainer">
                <div id="headliner">
              <h1> This is A simple "Shop"  {adder} {idee.map}</h1> 
              <button onClick={()=>setisopen(true)}>Cart</button>
              <button onClick={()=>setisopen(false)}>minimize</button>
              
            </div>
            <Cart open={isopen} ids={idee} pro1={pro1} pro2={pro2}></Cart>
    

        <div className="shopcontainer">
            <div id="pline1">
            <div id="prod1">
                    <h3 id="head1">Tomatoes: just yummy</h3>
                    <img id="img1" src="https://cdnprod.mafretailproxy.com/sys-master-root/h26/h7d/9913197887518/71610_main.jpg_1700Wx1700H"></img>
                    <p id="desc1"> Fresh, Juicy, just 17.99€</p>
                    <button onClick={click1}>add to cart</button>
            </div>
            <div id="prod2">
                    <h3 id="head2">Shoes with groove[all sizes]</h3>
                    <img id="img2"  src="https://image.shutterstock.com/image-photo/old-shoes-260nw-284615858.jpg"></img>
                    <p id="desc2"> Unique and minimal wear: 39.99€</p>
                    <button onClick={click2}>add to cart</button>
            </div>
            <div id="prod3">
                    <h3 id="head3">Voicetransferdevice</h3>
                    <img id="img3" src="https://uhrforum.de/attachments/103_1688-jpg.23868/"></img>
                    <p id="desc3"> Outstanding quality for 79.99€</p>
                    <button onClick={click3}>add to cart</button>
            </div>
            <div id="prod4">
                    <h3 id="head4">Antique Relict </h3>
                    <img id="img4" src="https://www.aquasabi.de/media/image/product/19044/lg/back-to-nature-river-stone.jpg"></img>
                    <p id="desc4"> 299.99€ for this fossil</p>
                    <button onClick={click4}>add to cart</button>
            </div></div>

          


            <div id="pline2">
            <div id="prod5">
                    <h3 id="head5">Artistic bottle</h3>
                    <img id="img5" src="https://5.imimg.com/data5/DP/YC/WG/SELLER-12509940/empty-plastic-water-bottle-500x500.jpg"></img>
                    <p id="desc5"> 14.95€ for this Art!</p>
                    <button onClick={click5}>add to cart</button>
            </div>
            <div id="prod6">
                    <h3 id="head6">Natures selection</h3>
                    <img id="img6" src="https://images.unsplash.com/photo-1615485020471-b66207f5e3bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RpY2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"></img>
                    <p id="desc6"> Look might vary, 16.99€</p>
                    <button onClick={click6}>add to cart</button>
            </div>
            <div id="prod7">
                    <h3 id="head7">Unique Artpiece</h3>
                    <img id="img7" src="https://images.freeimages.com/images/large-previews/c4d/paperclip-1426292.jpg"></img>
                    <p id="desc7"> 7.99€ Superdiscount!</p>
                    <button onClick={click7}>add to cart</button>
            </div>
            <div id="prod8">
                    <h3 id="head8">Vulcanized Polymere</h3>
                    <img id="img8" src="https://eu.evocdn.io/dealer/1048/content/media/rubberband.jpg"></img>
                    <p id="desc8"> 9.99€ for a lot of joy</p>
                    <button onClick={click8}>add to cart</button>
            </div></div>
        </div></div>
    )
}
