import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import React from "react"
import "./ProductPage.css";
import {Link} from "react-router-dom"

import image1 from "./large-equipemnt.jpg";
import image2 from "./milwaukee.jpg";
import image3 from "./ladder.jpg";
import seller from "./homedepot.jpg";

import {Col, Row} from "reactstrap";


function ProductPage(props) {
        function redirect()
        {
            window.location.href="http://www.homedepot.com";
        }
        return (
            <>
                <div>
                    <AliceCarousel autoPlay autoPlayInterval="2500">
                        <img src={image1} className="slideImg" alt="slideImage"/>
                        <img src={image2} className="slideImg2" alt="slideImage"/>
                        <img src={image3} className="slideImg" alt="slideImage"/>
                    </AliceCarousel>

                    <Row className="carousel">
                            <h1>Home Depot</h1>
                            <button className='button1 product' onClick={redirect}>
                                Visit Website
                            </button>
                        <Col className="sellerInfo">
                            <h1 className="">Seller</h1>
                            <Link to={'/item3seller'}>
                                <img src={seller}  className = "sliderImg3" alt="seller"/>
                            </Link>

                        </Col>
                    </Row>
                </div>

            </>

        );
}

export default ProductPage