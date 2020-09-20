import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HoverCards from "./HoverCards";
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import Login from "./Login.js";
import Product from "./ProductPage";
import SellPage from "./SellPage.js";
import SellerPage from "./SellerPage.js"

function App() {
  return (
    <main className="App">
        <Router>
            <NavBar/>
            <Route path="/aboutus"  component={AboutUs}/>
            <Route path="/main"  component={Home}/>
            <Route path="/finditems" component={HoverCards} />
            <Route path="/login" component={Login} />
            <Route path="/item3" component={Product} />
            <Route path="/sellitems" component={SellPage} />
            <Route path="/item3seller" component={SellerPage} />
        </Router>
    </main>
  );
}



export default App;
