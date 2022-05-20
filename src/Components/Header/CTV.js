import React from 'react'
import {BsTelegram} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs"
import {FaFacebookMessenger} from "react-icons/fa"

function CTV() {
  return (
    <div className='Ctva'> 
       <a href='https://t.me/kbehruz' target="_blank" className='tg-icon'><BsTelegram/></a> 
       <a href='https://www.instagram.com/developer75265' target="_blank" className='tg-icon'><BsInstagram/></a> 
       <a href='https://www.facebook.com/behruz.karimov.9693' target="_blank" className='tg-icon'><FaFacebookMessenger/></a> 
       <a href='#' className='header-border'></a>
    </div>
  )
}

export default CTV