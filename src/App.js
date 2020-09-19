import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HoverCards from "./HoverCards";
import Home from "./Home.js";
import Home2 from "./Home2.js";

function App() {
  return (
    <main className="App">
        <Router>
            <NavBar/>
            <Route path="/main"  component={Home}/>
            <Route path="/finditems" component={HoverCards} />
        </Router>
    </main>
  );
}



export default App;
