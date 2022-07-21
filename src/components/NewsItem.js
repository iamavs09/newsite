import React from 'react'
function NewsItem({image,smalltext,heading,text,button}) {
  return (
    <div className='newsItem'>
        <div >
            <div className="img" style={{backgroundImage: `url(${image})`}}></div>
        </div>
        <div className="content-container">
        <p>{smalltext}</p>   
        <h3>{heading}</h3>
        <p>{text}</p>
        <button>{button}</button>
        </div>

    </div>
  )
}

export default NewsItem