import React from 'react';
import './App.css';
import HoverCard from './HoverCard.js';
import NavBar from './NavBar.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <main className="App">
        <NavBar />

    </main>
  );
}

function HoverCards(props) {
    let cards = []
    for (let i = 0; i < props.num; i++) {
        cards.push(<HoverCard imageURL="./logo192.png" bottomText="Hello World!" centerText={"Hello again!"} size={{width: "400px", height: "400px"}}/>)
    }
    return <div className="hover-card-demo">{cards}</div>
}

export default App;
