import HoverCard from "./HoverCard";
import "./HoverCard.css";
import React from "react";
import bike from './items/bike.jpg'

function HoverCards(props) {
    let cards = []
    for (let i = 0; i < 10; i++) {
        cards.push(<HoverCard id={"hc" + i} imageURL={bike} bottomText="Bike" centerText={"Hello again!"} size={{width: "400px", height: "400px"}}/>)
    }
    return <div className="hover-card-demo">{cards}</div>
}

export default HoverCards;