import React from "react"
import "./SquareTetimonial.css"

export default function SquareTestimonial(props) {
    return(<div style={{height: props.size.height, width: props.size.width}}>
        {props.align === 'left' &&
        <img className="testimonial-image-square" src={props.image} alt={props.name} />
        }
        <div className='text'> {props.text}</div>
        {props.align === 'right' &&
        <img className="testimonial-image-square" src={props.image} alt={props.name} />
        }
    </div>)
}