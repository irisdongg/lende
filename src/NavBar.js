import React from "react"
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import "./NavBar.css"
import HoverCard from "./HoverCard";

function Navbar() {

    let pages = [{url: '/main', name: 'Home'},
        {url: '/hoverCards', name: 'Hover Cards Demo'},
        {url:'/orgPageDemo', name: 'Org Page Demo'}]

    return (
        <div>
            <Router>
                {pages.map((items) =>
                    <Link to={items.url} className='link' key={items.name}>
                        {items.name}
                    </Link>
                )}
                <Route path="/main"  />
                <Route path="/hoverCards" render={(props) => <HoverCards num={11} />} />
            </Router>
        </div>
    );
}
function HoverCards(props) {
    let cards = []
    for (let i = 0; i < props.num; i++) {
        cards.push(<HoverCard imageURL="./logo192.png" bottomText="Hello World!" centerText={"Hello again!"} size={{width: "400px", height: "400px"}}/>)
    }
    return <div className="hover-card-demo">{cards}</div>
}


export default Navbar