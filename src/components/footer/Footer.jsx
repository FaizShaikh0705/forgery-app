import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="footer_main">
        <div className="footer_1">
          <a href="#" className="footer_logo">IMAGE TO TEXT</a>
          <p className='footer_info'>“Image Text Converter” combines the power of optical character recognition with advanced AI algorithms to let users extract text from images. It takes less than a few seconds and only a couple of clicks to convert images into text.</p>
        </div>
        <div className="footer_2">
          <a href="#" className="useful_lnk">USEFUL LINKS</a>
          <ul className='useful_option'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#faq1">FAQ</a></li>
          </ul>
        </div>
        <div className="footer_3">
          <a href="#footer" className='contact_1'>CONTACT</a>
          <h5 className='contact_menu'>Faiz Shaikh</h5>
          <h5>Faizshaikh0705@gmail.com</h5>
        </div>
      </div>
      <div className="footer__copyright">
          <h5>&copy; Faiz Shaikh. All rights reserved. </h5>
        </div>
    </footer>
  )
}

export default Footer