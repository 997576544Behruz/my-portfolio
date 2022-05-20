import React, { useState } from 'react';
import {AiFillHome} from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs";
import {BiBook} from "react-icons/bi";
import {RiServiceFill} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";
import "./Nav.css"
function Nav() {
    const [active,setactive]=useState("#")
  return (
    <div className='Navbar'>
        <div className='Navbar-container'>
          <a href='#' onClick={()=>setactive('#')} className={active==="#" ?'active' :"hover"}
          ><AiFillHome/></a>  
          <a href='#about' onClick={()=>setactive('#about')} className={active==="#about" ?'active' :"hover"}>
              <BsFillPersonFill/></a> 
          <a href='#expirence' onClick={()=>setactive('#expirence')} className={active==="#expirence"
           ?'active' :"hover"}> <BiBook/></a> 
          <a href='#services' onClick={()=>setactive('#services')} 
          className={active==="#services" ?'active' :"hover"}><RiServiceFill/></a> 
 <a href='#contact' onClick={()=>setactive('#contact')}  className={active==="#contact" ?'active' :"hover" }><BiMessageSquareDetail/></a> 
        </div>
    </div>
  )
}

export default Nav