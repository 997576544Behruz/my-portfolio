import React from 'react'
import "./Portfolio.css"
import PORTIMG from '../../images/2.jpg';
function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='portfolio-container container'>
        <div className='about-title'>
          <h5 className='about-h5'>Mening Oxirgi Ishlarim</h5>
          <h2 className='about-h2'>Portfolio</h2>
        </div>
        <div className='portfolio-main'>
              <div className='portfolio-main-container'>
                <ul className='portfolio-1'>
                  <li className='portfolio-1-img'> <img src={PORTIMG}/></li>
                  <li className='portfolio-1-title'>Samarqand iqtisodiyot va servis instituti</li>
                  <li className='portfolio-1-btn'><a href='#' className='portfolio-btn'>Ko'rish</a></li> 
                </ul>
                <ul className='portfolio-1'>
                  <li className='portfolio-1-img'> <img src={PORTIMG}/></li>
                  <li className='portfolio-1-title'>Samarqand iqtisodiyot va servis instituti</li>
                  <li className='portfolio-1-btn'><a href='#' className='portfolio-btn'>Ko'rish</a></li> 
                </ul>
                <ul className='portfolio-1'>
                  <li className='portfolio-1-img'> <img src={PORTIMG}/></li>
                  <li className='portfolio-1-title'>Samarqand iqtisodiyot va servis instituti</li>
                  <li className='portfolio-1-btn'><a href='#' className='portfolio-btn'>Ko'rish</a></li> 
                </ul>
                <ul className='portfolio-1'>
                  <li className='portfolio-1-img'> <img src={PORTIMG}/></li>
                  <li className='portfolio-1-title'>Samarqand iqtisodiyot va servis instituti</li>
                  <li className='portfolio-1-btn'><a href='#' className='portfolio-btn'>Ko'rish</a></li> 
                </ul>
                <ul className='portfolio-1'>
                  <li className='portfolio-1-img'> <img src={PORTIMG}/></li>
                  <li className='portfolio-1-title'>Samarqand iqtisodiyot va servis instituti</li>
                  <li className='portfolio-1-btn'><a href='#' className='portfolio-btn'>Ko'rish</a></li> 
                </ul>
                <ul className='portfolio-1'>
                  <li className='portfolio-1-img'> <img src={PORTIMG}/></li>
                  <li className='portfolio-1-title'>Samarqand iqtisodiyot va servis instituti</li>
                  <li className='portfolio-1-btn'><a href='#' className='portfolio-btn'>Ko'rish</a></li> 
                </ul>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio