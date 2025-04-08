import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt=''/>
          <p> Whether you're craving something savory or sweet, our curated selection offers something for every palate. From gourmet burgers and handcrafted pizzas to fresh salads and decadent desserts, our dishes are prepared with the finest ingredients to ensure every bite is a deligh</p>
          <div className="footer-social-icons">
          <img src={assets.facebook_icon} alt=''/>
        <img src={assets.twitter_icon} alt=''/>
        <img src={assets.linkedin_icon} alt=''/>
          </div>
        </div>
        <div className='footer-content-center'>
         <h2>COMPANY</h2>
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
         </ul>
         </div>
        <div className='footer-content-right'>
         <h2>GET IN TOUCH</h2>
         <ul>
         <li>+1-212-456-7898</li>
         <li>contact@FoodFeast.com</li>
         </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>
        copyright 2024 @ FoodFeast.com-All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
