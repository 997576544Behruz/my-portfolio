import React from 'react'
import "./services.css"
import {AiOutlineCheck} from "react-icons/ai"
function Services() {
  return (
    <div className='servicesv' id="services">
      <div className='services-container container'>
        <div className='about-title'>
          <h5 className='about-h5'>Men taklif qiladigan</h5>
          <h2 className='about-h2'>Xizmatlar</h2>
        </div>
        <div className='services-main'>
            <div className='serices-main-container'>
              <div className='services-left'>
              <h3 className='services-frontend'>Frontend</h3>
                      <ul className='services-left-container'>
                          <li className='services-item'>
                            <AiOutlineCheck className='ser-icon'/>
                            <span>Chiroyli dizayn</span>
                          </li>
                          <li className='services-item'>
                            <AiOutlineCheck className='ser-icon'/>
                            <span>Har qanday qurilmalarga moslashuvchan</span>
                          </li>
                          <li className='services-item'>
                            <AiOutlineCheck className='ser-icon'/>
                            <span>Foydalanuvchilarni jalb qiladigan</span>
                          </li>
                          <li className='services-item'>
                            <AiOutlineCheck className='ser-icon'/>
                            <span>Foydalanish uchun qulay</span>
                          </li>
                          <li className='services-item'>
                            <AiOutlineCheck className='ser-icon'/>
                            <span>Mukammal turdagi dizaynlar</span>
                          </li>
                         
                      </ul>
              </div>
              <div className='services-left'>
              <h3 className='services-frontend'>Frontend Development</h3>
                      <ul className='services-left-container'>
                          <li className='services-item'>
                            <AiOutlineCheck className='ser-icon'/>
                            <span>HTML</span>
                          </li>
                          <li className='services-item'>
                            <AiOutlineCheck className='ser-icon'/>
                            <span>CSS</span>
                          </li>
                          <li className='services-item'>
                            <AiOutlineCheck className='ser-icon'/>
                            <span>SASS</span>
                          </li>
                          <li className='services-item'>
                            <AiOutlineCheck className='ser-icon'/>
                            <span>BOOTSTRAP</span>
                          </li>
                          <li className='services-item'>
                            <AiOutlineCheck className='ser-icon'/>
                            <span>JAVASCRIPT</span>
                          </li>
                          <li className='services-item'>
                            <AiOutlineCheck className='ser-icon'/>
                            <span>JQUERY</span>
                          </li>
                          <li className='services-item'>
                            <AiOutlineCheck className='ser-icon'/>
                            <span>REACT</span>
                          </li>                         
                      </ul>
              </div>
              <div className='services-left'>
              <h3 className='services-frontend'>Grafika</h3>
                      <ul className='services-left-container'>
                          <li className='services-item'>
                            <AiOutlineCheck className='ser-icon'/>
                            <span>Reklama bannerlar</span>
                          </li>
                          <li className='services-item'>
                            <AiOutlineCheck className='ser-icon'/>
                            <span>Turli xil flayerlar</span>
                          </li>
                          <li className='services-item'>
                            <AiOutlineCheck className='ser-icon'/>
                            <span>Ijtimoiy tarmoqlar uchun reklama bannerlar</span>
                          </li>
                          <li className='services-item'>
                            <AiOutlineCheck className='ser-icon'/>
                            <span>Logotiplar</span>
                          </li>
                      </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services