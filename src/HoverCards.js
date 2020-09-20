import HoverCard from "./HoverCard";
import "./HoverCard.css";
import React from "react";
import bike from './items/bike.jpg'
import sportsbasement from './items/sportsbasement.jpg';
import homedepot from './items/homedepot.jpg';
import kitchenaid from './items/kitchenaid.jpg';
import rv from './items/rv.jpeg'
import camera from './items/camera.jpg'


export default class HoverCards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id:'item1', description: 'Giant mountain bike available for rent! Feel free to email me at a@gmail.com for more details.', image: bike, bottomText: 'Mountain Bike 29.5in'},
                {id: 'item2', description: 'Rent Mountain Bikes, Road Bikes, Skis, Snowboards, and other outdoor gear!', image: sportsbasement, bottomText: 'Sports Basement Rentals'},
                {id: 'item3', description: 'Rent tools, trucks, trailers!', image: homedepot, bottomText: 'Home Depot Rentals'},
                {id: 'item4', description: 'Rent this KitchenAid stand mixer! Please contact me at b@gmail.com for more details.', image: kitchenaid, bottomText: 'KitchenAid Stand Mixer'},
                {id: 'item5', description: 'Rent this RV for a great weekend getaway trip! Contact me at c@gmail.com for more details.', image: rv, bottomText: 'Spacious 4-person RV'},
                {id: 'item6', description: 'Rent this Nikon film camera!', image: camera, bottomText: 'Film Camera'},
            ],
            cards: [],
            clicked: false,
        };

    }
    componentDidMount() {
        let newcards = []
        for (let i = 0; i < this.state.data.length; i++) {
            newcards.push(<HoverCard id={this.state.data[i].id} imageURL={this.state.data[i].image} bottomText={this.state.data[i].bottomText} centerText={this.state.data[i].description} size={{width: "400px", height: "400px"}}/>)
        }
        this.setState((state) => {
            return {cards: newcards}
        });
    }
    handleClick() {
        let newcards = []
        if(!this.state.clicked) {
            for (let i = 1; i < 3; i++) {
                newcards.push(<HoverCard id={this.state.data[i].id} imageURL={this.state.data[i].image} bottomText={this.state.data[i].bottomText} centerText={this.state.data[i].description} size={{width: "400px", height: "400px"}}/>)
            }
            this.setState((state) => {
                return {clicked: true, cards: newcards}
            });
        } else {
            for (let i = 0; i < this.state.data.length; i++) {
                newcards.push(<HoverCard id={this.state.data[i].id} imageURL={this.state.data[i].image} bottomText={this.state.data[i].bottomText} centerText={this.state.data[i].description} size={{width: "400px", height: "400px"}}/>)
            }
            this.setState((state) => {
                return {clicked: false, cards: newcards}
            });
        }

    }
    render()
    {
        return(
            <div className = 'findpage'>
                <button className='button1' onClick={() => this.handleClick()}>
                    Only Nearby Stores
                </button>
                {<div className="hover-card-demo">
                    {this.state.cards}
                </div>}
            </div>
        )
    }
}