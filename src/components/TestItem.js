import React from 'react';
function TestItem({text,image,heading}) {
  return (
    <div className='testItem'>
        <p>{text}</p> 
        <div className='container-test'>
            <div className="img" style={{backgroundImage: `url(${image})`}}></div>
            <h3>{heading}</h3>
        </div>  
    </div>
  )
}

export default TestItem;