import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import React from "react"
import "./ProductPage.css";

import image1 from "./kenny-chi.jpeg";
import image2 from "./ocean.jpg";
import image3 from "./ocean1.jpg";
import image4 from "./ocean2.jpg";

import {
    Container,
    Row,
    Col
} from "reactstrap";


function ProductPage(props) {
    return (
        <>
            <div>
                <AliceCarousel autoPlay autoPlayInterval="2500">
                    <img src={image1} className="slideImg" alt="slideImage"/>
                    <img src={image2} className="slideImg" alt="slideImage"/>
                    <img src={image3} className="slideImg" alt="slideImage"/>
                    <img src={image4} className="slideImg" alt="slideImage"/>
                </AliceCarousel>
                <h1 className="product">Ocean + Kenny</h1>
                <h2 className="product">$15.00</h2>
                <h1 className="">Seller</h1>s
            </div>

</>

)
    ;
}

export default ProductPage