import React from 'react'

function PriceItem({smallheading,heading,text,button}) {
  return (
    <div className='priceItem' id='wave'>
        <h4>{smallheading}</h4>
        <h2>{heading}</h2>
        <p>{text}</p>
        <button>{button}</button>
    </div>
  )
}

export default PriceItem