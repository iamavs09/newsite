import React from 'react'
import "../Styles/Pricing.css"
import PriceItem from './PriceItem';
import {pricingCardList} from "../helpers/PricingCards";

function Pricing() {
  return (
    <div className='pricing' id='pricing'>
        <h2>Choose Your Best Pricing Plan</h2>
        <div className="selector">
            <h3>Added for Monthly</h3>
            <div id="selector-bar">
              <div id="selector-ball"></div>
            </div>
            <h3>Yearly</h3>
        </div>

        <div className="pricingCardlist">
            {pricingCardList.map((priceItem,key) => {
                return (
                <PriceItem
                key={key} 
                smallheading={priceItem.smallheading}
                heading={priceItem.heading} 
                text={priceItem.text}
                button={priceItem.button}
                />);
            })}
        </div>

    </div>
  )
}

export default Pricing