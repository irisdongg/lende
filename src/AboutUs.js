import React from "react"
import Testimonial from './Testimonial.js';

import './AboutUs.css'
import logo from './lendelogoblack.png';
import kenny from './kenny-chi.jpeg'
import iris from './iris-dong.jpeg'

function AboutUs(props) {
    let pages = [
        {name:'Kenny', text: 'Hi everyone, my name is Kenny Chi and I\'m a second year CS student at UC Berkeley.', image: kenny, align: 'left'},
        {name: 'Iris', text: 'Hi everyone, my name is Iris Dong and I\'m a second year ECE student at Carnegie Mellon University.', image: iris, align: 'right'},
    ]
    return (

        <center className = 'aboutus'>
            <img src={logo} className='logo-aboutus' alt={'lende logo'} />
            {pages.map((items) =>
                <Testimonial className = 'testimonial' align={items.align} name={items.name} text={items.text} image={items.image} size={{width: "1000px", height: "200px"}}/>
            )}
        </center>

    )

}
export default AboutUs