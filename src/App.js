import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HoverCards from "./HoverCards";

function App() {
  return (
    <main className="App">
        <Router>
            <NavBar classname = 'navbar'/>
            <Route path="/main"  exact/>
            <Route path="/finditems" component={HoverCards} />
        </Router>
    </main>
  );
}



export default App;
