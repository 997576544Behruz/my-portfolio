import React from 'react'
import "./about.css"
import Imgs from "../../images/1.jfif"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

function about() {
  return (
    <div className='about' id='about'>
      <div className='about-container container'>
        {/* about title start */}
        <div className='about-title'>
          <h5 className='about-h5'>Ma'lumotlar</h5>
          <h2 className='about-h2'>Men Haqimda</h2>
        </div>
        {/* about title end */}
        {/* about main start */}
        <div className='about-main'>
          <div className='about-main-container'>
            <div className='about-left'>
              <div className='about-left-img'>
                <img src={Imgs} alt=" my Images" />
              </div>

            </div>
            <div className='about-right'>

              <div className='about-right-container'>
                <div className='about-right-title'>
                  <div className='about-right-title'>
                    <div className='about-right-block'>
                      <FaAward className='about-icon' />
                      <div className='about-exp'>Tajriba</div>
                      <div className='about-number'>2+</div>
                    </div>
                    <div className='about-right-block'>
                      <FiUsers className='about-icon' />
                      <div className='about-exp'>Mijozlar</div>
                      <div className='about-number'>10+</div>
                    </div>
                    <div className='about-right-block'>
                      <VscFolderLibrary className='about-icon' />
                      <div className='about-exp'>Loyihalar</div>
                      <div className='about-number'>10+</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* about-footer start  */}
              <div className='about-footer'>
                <div className='about-footer-container'>
                  <div>
                  Men Behruz Karimov Toshkent Axborot Texnologiyalari universiteti Samarqand filialiga 2019-yil o'qishga qabul qilinganman. 2021-yil dan boshlab web dasturlashni o'rganib kelmoqdaman. Hozirgi kungacha bir qancha real loyihalar bilan ishlaganman.
                  
                  </div>
                  <div className='about-btn'>
                        <a href='#contact' className='btn btn-right'>Bog'lanish</a>
                  </div>
                </div>
              </div>
              {/* about-footer end  */}
            </div>
          </div>

        </div>
        {/* about main end  */}

      </div>
    </div>
  )
}

export default about;