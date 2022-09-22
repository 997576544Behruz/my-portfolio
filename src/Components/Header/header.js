import React from 'react-dom'
import "./header.css"
import CTV  from './CTV'
import IMG from "../../images/1.jfif";
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
function header() {
  return (
    <div className='header'>
      <div className='header-container container'>
        <h5>Salom Men</h5>
        <h2 className='h2'>Behruz Karimov</h2>
        <h5 className='h5 typewriter' >
        <Typewriter 
            words={['Frontend Developer','Backend Developer']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={200}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </h5>

        <div className='header-btn'>
              <a href={IMG} className='btn' download >Dovnload CV</a>
              <a href='#contact' className='btn btn-right'>Bog'lanish</a>
        </div>
        <div className='header-footer'>
            <CTV/>
            <div className='header-left'>
              <img src={IMG} className="header-img"/>
            </div>
            <div className='header-right'>
                   <a href='#' className='scroll'> scroll down</a> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default header