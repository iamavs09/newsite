import React from 'react'
import {TestList} from "../helpers/TestCards"
import TestItem from './TestItem'
import "../Styles/Testimonial.css"

function Testimonial() {
  return (
    <div className='testimonial' id='testimonial'>
        <h2>Let's See our Customer Review</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima corrupti ullam quo similique maiores hic, neque veritatis velit molestiae ea.</p>
        <div className="testList">
            {TestList.map((testItem,key) => {
                return (
                <TestItem
                key={key} 
                text={testItem.text}
                image={testItem.image} 
                heading={testItem.heading} 
                
                />);
            })}
        </div>
    </div>
  )
}

export default Testimonial