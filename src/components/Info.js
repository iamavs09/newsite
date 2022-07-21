import React from 'react'
import "../Styles/Info.css"

function Info() {
  return (
    <div className='info'>
        <div className="info-left">
        </div>
        <div className="info-right">
            <div className="head-container">
            <h2>It's helpful for operating <br />
            system</h2>
            </div>
            <div className="body-container">
                <ul>
                    <li>
                        <h3>Ultra Fast and Secure</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quam.</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h3>Allows Customization</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quam.</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h3>Smart Contract</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quam.</p>
                    </li>
                </ul>
            </div>
            
            
        </div>

    </div>
  )
}

export default Info