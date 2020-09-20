import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import React from "react"
import "./ProductPage.css";

import image1 from "./large-equipemnt.jpg";
import image2 from "./milwaukee.jpg";
import image3 from "./ladder.jpg";
import seller from "./homedepot.jpg";

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
                        <img src={image2} className="slideImg2" alt="slideImage"/>
                        <img src={image3} className="slideImg" alt="slideImage"/>
                    </AliceCarousel>

                    <Row className="carousel">
                        <Col className="productInfo">
                            <h1 className="productInfo">Home Depot</h1>
                            <br/> <br/> <br/> <br/>
                            <h2 className="productInfo">Price Varies</h2>
                            <br/>
                            <br/>
                            <h3 className="productInfo"> About the company </h3> <br/><br/><br/><br/><br/>
                            <h4 classname = "productInfo"> Home Depot offers a wide variety of power tools
                                that can be rent out to users. Find out more by visiting their
                                website below. </h4>
                            <button className='button1 product'>
                                Visit Website
                            </button>
                        </Col>
                        <Col className="sellerInfo">
                            <h1 className="">Seller</h1>
                            <img src={seller}  className = "sliderImg3" alt="seller"/>
                        </Col>
                    </Row>
                </div>

            </>

        );
}

export default ProductPage