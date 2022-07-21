import React from 'react'
import {CardList} from "../helpers/ServicesCardList"
import CardItem from './CardItem'
import "../Styles/Services.css"

function Services() {
  return (
    <div className='services' id='services'>
        <h2>We Provide Best Feature <br />
        for Customer</h2>

        <div className="cardlist">
            {CardList.map((cardItem,key) => {
                return (
                <CardItem
                key={key} 
                image={cardItem.image} 
                heading={cardItem.heading} 
                text={cardItem.text}/>);
            })}
        </div>
    </div>
  )
}

export default Services