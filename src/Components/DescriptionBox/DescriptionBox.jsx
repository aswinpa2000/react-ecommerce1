import React from 'react'
import './DescriptionBox.css';

const Description = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
          <div className='descriptionbox-nav-box'>Description</div>
          <div className='descriptionbox-nav-box fade'>Reviews(122)</div>
        </div>
        <div className='descriptionbox-description'>
          <p>An e-commerce website is an platform that facilitates
          buying and selling of products or services over the 
          internet serves as a virtual marketplace where buisness 
          and individual showcase their products, internet with customers ,and conducts transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience accessibility, and the global reach they offer.</p>
          <p>
            E-commerce websites typically display products or services and detailed descriptions, images, prices, and any available variety.(e.g., sizes, colors).Each products usually hass its own dedication with relevant information.
          </p>
        </div>
    </div>
  )
}

export default Description