import React from 'react'
import "./footer.css"
import { BsInstagram } from "react-icons/bs"
import { BsTelegram } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
function footer() {
  return (
    <div className='footer '>
      <div className='footer-container container'>
        <div className='footer-title'>
          <h1><a href='#' >BehruzKarimov</a></h1>
        </div>
        <ul className='footer-item'>
          <li><a href='#'>Bosh sahifa</a></li>
          <li><a href='#'>Men haqimda</a></li>
          <li><a href='#'>Tajribam</a></li>
          <li><a href='#'>Xizmatlarim</a></li>
          <li><a href='#'>Portfolio</a></li>
          <li><a href='#'>Mijozlar</a></li>
          <li><a href='#'>Bog'lanish</a></li>
        </ul>
        <ul className='footer-blogs'>
          <li><a href='https://www.facebook.com/behruz.karimov.9693' target='_blank'> <span> <FaFacebookF /></span></a></li>
          <li><a href='https://www.instagram.com/developer7576544/' target='_blank'> <span> <BsInstagram /></span></a></li>
          <li><a href='https://t.me/kbehruz' target='_blank'>  <span><BsTelegram /></span></a></li>
        </ul>
        <div className='footer-copy'>&copy;BehruzKarimov. All rights reserved. </div>
      </div>
    </div>
  )
}

export default footer