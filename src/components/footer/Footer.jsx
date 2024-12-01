import React from 'react'
import './Footer.scss'
import { FaLinkedinIn, FaInstagram, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='contact' className='footer'>
      <div className='footerCont'>
        <h1>LET'S CONNECT</h1>
        <p>GET IN TOUCH FOR OPPORTUNITIES OR JUST TO SAY HI! 👋</p>
        <div className='contactCont'>
          <div className='contactIcon'>
            <FaLinkedinIn />
          </div>
          <div className='contactIcon'>
            <FaInstagram />
          </div>
          <div className='contactIcon'>
            <FaRegEnvelope />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer