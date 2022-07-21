import React from 'react';
import "../Styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className="row">
        <div className="col">
          <h2>Codext</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          <div className="icons">
                  <div className="fb"></div>
            <div className="tw"></div>
            <div className="li"></div>
           <div className="in"></div>
          </div>
        </div>
        <div className="col">
           <h3>Resources</h3>
          <p>Services</p>
          <p>Pricing</p>
          <p>Testimonials</p>
          <p>Blogs</p>
        </div>
        <div className="col">
          <h3>Usefull Links</h3>
          <p>Terms of services</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
          <p>Contact us</p>
        </div>
        <div className="col">
          <h3>News letter</h3>
          <p>Sign up for the latset news</p>
          <input type="text" placeholder='Email adress'/>
          <button>Send</button>
        </div>
        
      </div>
      <hr />
      <p className='copyright'>CopyRight 2021 The Codext All rights reserved</p>
    </div>
  )
}

export default Footer