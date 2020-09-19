import React from "react"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import "./NavBar.css"

function Navbar() {

    let pages = [{url: '/main', name: 'Home'},
        {url: '/hoverCards', name: 'Hover Cards Demo'},
        {url:'/orgPageDemo', name: 'Org Page Demo'}]

    return (
        <div className='navbar'>
            <Router>
                {pages.map((items) =>
                    <Link to={items.url} className='link' key={items.name}>
                        {items.name}
                    </Link>
                )}
            </Router>
        </div>
    );
}

export default Navbar