import HoverCard from "./HoverCard";
import "./HoverCard.css";
import React from "react";
import iris from './iris-dong.jpeg'

function HoverCards(props) {
    let cards = []
    for (let i = 0; i < 10; i++) {
        cards.push(<HoverCard id={"hc" + i} imageURL={iris} bottomText="Hello World!" centerText={"Hello again!"} size={{width: "400px", height: "400px"}}/>)
    }
    return <div className="hover-card-demo">{cards}</div>
}

export default HoverCards;