import HoverCard from "./HoverCard";
import "./HoverCard.css";
import React from "react";

function HoverCards(props) {
    let cards = []
    for (let i = 0; i < 10; i++) {
        cards.push(<HoverCard id={"hc" + i} imageURL="./logo192.png" bottomText="Hello World!" centerText={"Hello again!"} size={{width: "400px", height: "400px"}}/>)
    }
    return <div className="hover-card-demo">{cards}</div>
}

export default HoverCards;