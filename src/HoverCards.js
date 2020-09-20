import HoverCard from "./HoverCard";
import "./HoverCard.css";
import React from "react";
import bike from './items/bike.jpg'
import sportsbasement from './items/sportsbasement.jpg';
import homedepot from './items/homedepot.jpg';
import kitchenaid from './items/kitchenaid.jpg';
import rv from './items/rv.jpeg'
import camera from './items/camera.jpg'


function HoverCards(props) {
    let data = [
        {id:'item1', description: 'Giant mountain bike available for rent! Feel free to email me at a@gmail.com for more details.', image: bike, bottomText: 'Mountain Bike 29.5in'},
        {id: 'item2', description: 'Rent Mountain Bikes, Road Bikes, Skis, Snowboards, and other outdoor gear!', image: sportsbasement, bottomText: 'Sports Basement Rentals'},
        {id: 'item3', description: 'Rent tools, trucks, trailers!', image: homedepot, bottomText: 'Home Depot Rentals'},
        {id: 'item4', description: 'Rent this KitchenAid stand mixer! Please contact me at b@gmail.com for more details.', image: kitchenaid, bottomText: 'KitchenAid Stand Mixer'},
        {id: 'item5', description: 'Rent this RV for a great weekend getaway trip! Contact me at c@gmail.com for more details.', image: rv, bottomText: 'Spacious 4-person RV'},
        {id: 'item6', description: 'Rent this Nikon film camera!', image: camera, bottomText: 'Film Camera'},
    ]
    let cards = []
    for (let i = 0; i < data.length; i++) {
        cards.push(<HoverCard id={data[i].id} imageURL={data[i].image} bottomText={data[i].bottomText} centerText={data[i].description} size={{width: "400px", height: "400px"}}/>)
    }

    return(
            <div className = 'findpage'>
                <button className='button1'>
                    Only Nearby Stores
                </button>
                <div className="hover-card-demo">{cards}</div>
            </div>


    )
}

export default HoverCards;