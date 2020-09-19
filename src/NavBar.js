import React from "react"
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import "./NavBar.css"
import ReactSearchBox from 'react-search-box'

function Navbar() {

    let pages = [
        {url: '/finditems', name: 'Find items'},
        {url:'/login', name: 'Sign Up/Log In'}]
    let data = [
        {
            key: 'j',
            value: 'John Doe',
        },
        {
            key: 'j',
            value: 'Jane Doe',
        },
        {
            key: 'm',
            value: 'Mary Phillips',
        },
        {
            key: 'r',
            value: 'Robert',
        },
        {
            key: 'k',
            value: 'Karius',
        },
    ]
    return (
        <div className='navbar'>
                <Link to={'/main'} className='logo' key={'Momento'}>
                    {'Momento'}
                </Link>
                {pages.map((items) =>
                    <Link to={items.url} className='link' key={items.name}>
                        {items.name}
                    </Link>
                )}
                <ReactSearchBox
                    placeholder="Search..."
                    data={data}
                    className = 'search'
                />
        </div>
    );
}



export default Navbar