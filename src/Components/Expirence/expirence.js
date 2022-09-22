import React from 'react'
import "./expirence.css"
import { BiBadgeCheck } from "react-icons/bi"
function expirence() {
  return (
    <div className='expirence' id='expirence'>
      <div className='expirence-container container'>
        <div className='about-title'>
          <h5 className='about-h5'>Menda bor ko'nikmalar</h5>
          <h2 className='about-h2'>Mening Tajribam</h2>
        </div>
        <div className='expirence-main'>
          <div className='expirence-main-container  '>
            <h1>Frontend Tajriba</h1>
            <div className='expirence-main-ul'>
              <ul className='expirence-main-left'>
                <li className='expirence-item'>
                  <div className='expirence-icons'><BiBadgeCheck /></div>
                  <div className='exp-frontend'>
                    <h3>HTML</h3>
                    <h5>Yo'qori darajada</h5>
                  </div>
                </li>
                <li className='expirence-item'>
                  <div className='expirence-icons'><BiBadgeCheck /></div>
                  <div className='exp-frontend'>
                    <h3>Bootstrap</h3>
                    <h5>Yo'qori darajada</h5>
                  </div>
                </li>
              </ul>
              <ul className='expirence-main-left'>
                <li className='expirence-item'>
                  <div className='expirence-icons'><BiBadgeCheck /></div>
                  <div className='exp-frontend'>
                    <h3>CSS</h3>
                    <h5>Yo'qori darajada</h5>
                  </div>
                </li>
                <li className='expirence-item'>
                  <div className='expirence-icons'><BiBadgeCheck /></div>
                  <div className='exp-frontend'>
                    <h3>Java Script</h3>
                    <h5>Yo'qori darajada</h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='expirence-main-container '>
            <h1>Backend Tajriba</h1>
            <div className='expirence-main-ul'>
              <ul className='expirence-main-left'>
                <li className='expirence-item'>
                  <div className='expirence-icons'><BiBadgeCheck /></div>
                  <div className='exp-frontend'>
                    <h3>Python</h3>
                    <h5>Yo'qori darajada</h5>
                  </div>
                </li>
                <li className='expirence-item'>
                  <div className='expirence-icons'><BiBadgeCheck /></div>
                  <div className='exp-frontend'>
                    <h3>Django</h3>
                    <h5>Yo'qori darajada</h5>
                  </div>
                </li>
               </ul>
              <ul className='expirence-main-left'>
              <li className='expirence-item'>
                  <div className='expirence-icons'><BiBadgeCheck /></div>
                  <div className='exp-frontend '>
                    <h3 className='expirence-item1'>PostgreSQL    </h3>
                    <h5>Middle darajada</h5>
                  </div>
                </li>
              <li className='expirence-item'>
                  <div className='expirence-icons'><BiBadgeCheck /></div>
                  <div className='exp-frontend'>
                    <h3>Django Rest   
                      <br></br>
                       Framework

                    </h3>
                    <h5>Middle darajada</h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default expirence