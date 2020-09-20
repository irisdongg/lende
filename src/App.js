import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HoverCards from "./HoverCards";
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import Login from "./Login.js"

function App() {
  return (
    <main className="App">
        <Router>
            <NavBar/>
            <Route path="/aboutus"  component={AboutUs}/>
            <Route path="/main"  component={Home}/>
            <Route path="/finditems" component={HoverCards} />
            <Route path="/login" component={Login} />
        </Router>
    </main>
  );
}



export default App;
