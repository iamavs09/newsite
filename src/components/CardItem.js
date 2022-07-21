import React from 'react';

function CardItem({image,heading,text}) {
  return (
    <div className='cardItem'>
        <div >
            <div className="img-container">
                <div className="img" style={{backgroundImage: `url(${image})`}}></div>
            </div>
        </div>
        <div className="content-container">
        <h3>{heading}</h3>
        <p>{text}</p>
        </div>

    </div>
  )
}

export default CardItem