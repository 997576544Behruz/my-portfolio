import { useRef } from 'react'; 
import emailjs from 'emailjs-com';
import { BsInstagram } from "react-icons/bs"
import { BsTelegram } from "react-icons/bs"
import { FaFacebookMessenger } from "react-icons/fa"
import "./contact.css"
function Contact() {
const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_n8lps0n', 'template_iwxy9fq', form.current, 'ZN3meZ5F2U1nBZrEo')
      e.target.reset()
    };

  return (
    <div className='contact' id='contact'>
      <div className='contact-container container'>
        <div className='about-title'>
          <h5 className='about-h5'>Aloqa uchun</h5>
          <h2 className='about-h2'>Men Bilan Bog'laning</h2>
        </div>
        <div className='contact-main'>
          <div className='contact-main-container'>
            <div className='contact-left'>
              <div className='contact-left-container'>
                <div className='contact-left-item'>
                  <span> <BsInstagram /></span>
                  <span>Instagram</span>
                  <span><a href='https://www.instagram.com/developer7576544/' className='contact-a'>Send a message</a> </span>
                </div>
                <div className='contact-left-item'>
                  <span> <BsTelegram /></span>
                  <span>Telegram</span>
                  <span><a href='https://t.me/kbehruz' className='contact-a'>Send a message</a> </span>
                </div>
                <div className='contact-left-item'>
                  <span> <FaFacebookMessenger /></span>
                  <span>Facebook</span>
                  <span><a href='https://www.facebook.com/behruz.karimov.9693' className='contact-a'>Send a message</a> </span>
                </div>
              </div>
            </div>
            <div className='contact-right' >
              <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='name' placeholder='Your full Name' />
                <input type='email' name='email' placeholder='Your Email' />
                <textarea type='textarea' name='message' placeholder='Your message'>

                </textarea>
                <button type='submit' className='submit-btn'>Xabar yuborish</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact