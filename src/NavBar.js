import React from "react"
import {Link} from "react-router-dom"
import "./NavBar.css"
import logo from './lendelogo.png';

function Navbar() {

    let pages = [
        {url:'/aboutus', name: 'About Us'},
        {url: '/finditems', name: 'Find Items'},
        {url:'/sellitems', name: 'Sell Items'},
        {url:'/login', name: 'Sign Up/Log In'}
        ]
    return (
        <div>
            <Link to={'/main'} className='logo' key={'Lende'}>
                <img src={logo} className='logo' alt={'lende logo'} />
            </Link>
            <div className='navbar'>
                {pages.map((items) =>
                    <Link to={items.url} className='link' key={items.name}>
                            {items.name}
                    </Link>
                )}
            </div>
        </div>


    );
}



export default Navbar;
