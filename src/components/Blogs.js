import React from 'react'
import {NewsList} from "../helpers/NewsCards"
import NewsItem from './NewsItem'
import "../Styles/Blog.css"

function Blogs() {
  return (
    <div className='blog' id='blog'>
        <h2>Latest Insights News</h2>

        <div className="newsList">
            {NewsList.map((newsItem,key) => {
                return (
                <NewsItem
                key={key} 
                image={newsItem.image} 
                smalltext={newsItem.smalltext}
                heading={newsItem.heading} 
                text={newsItem.text}
                button={newsItem.button}/>);
            })}
        </div>
    </div>
  )
}

export default Blogs