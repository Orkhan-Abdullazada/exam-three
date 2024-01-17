import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
        <h2>Tasty</h2>
        <div className='icons'>
            <div className='icon-f'>
                <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className='icon-t'>
                <i className="fa-brands fa-twitter "></i>
            </div>
            <div className='icon-p'>
                <i className="fa-brands fa-pinterest"></i>
            </div>
            <div className='icon-s'>
                <i className="fa-brands fa-skype"> </i>
            </div>
            <div className='icon-i'>
                <i className="fa-brands fa-linkedin"></i>
            </div>
            <div className='icon-b'>
                <i className="fa-solid fa-basketball"></i>
            </div>
            <div className='icon-w'>
                <i className="fa-solid fa-wifi"></i>
            </div>
        </div>
        <div className='footer__end'>
            <p>Copyright @2018 All rights reserved | This template is made with</p>
            <i className="fa-regular fa-heart"></i>
            <p>by</p>
            <p className='p'>Colorlib</p>
        </div>
    </div>
  )
}

export default Footer
