import React from "react"
import Testimonial from './Testimonial.js';
import person from "./person.png"
export default function SellerPage(props) {
    let pages = [
        {name:'Kenny', text: 'Anonymous Larry: 5 stars! Home Depot\'s customer service was amazing. I would totally recommend going.' , image: person, align: 'left'},
        {name: 'Iris', text: 'Johnny Green: 1 star. Johnny was so rude to me, I would not go again.', image: person, align: 'right'},
    ]
    return (
        <center className = 'aboutus'>
            <h1>Home Depot</h1>
            {pages.map((items) =>
                <Testimonial className = 'testimonial' align={items.align} name={items.name} text={items.text} image={items.image} size={{width: "1000px", height: "200px"}}/>
            )}
        </center>
    )
}