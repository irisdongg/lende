import React from "react";
import "./Home.css";
import "./App.css";
import sports from './sports.png';
import tools from './tools.png';
import kitchen from './kitchen.png';
import nearby from './nearby.png';
import SquareTestimonial from './SquareTestimonial.js';

import {
    Container,
    Row,
    Col
} from "reactstrap";

class Home extends React.Component {
            render() {
                let pages = [
                    {name:'Near By', text: 'Find cool items nearby', image: nearby, align: 'left'},
                    {name: 'Sports', text: 'Find a wide variety of sports gear from bikes to skiis', image: sports, align: 'right'},
                    {name:'Kitchen Appliances', text: 'Find kitchen appliances such as stand mixers', image: kitchen, align: 'left'},
                    {name: 'Tools', text: 'Find different power tools to rent for your next DIY project', image: tools, align: 'right'},
                ]
                return (
                    <div>
                        <div className="page-header">
                            <div className="text-center">
                                <h1 className="text-center">Do more. Meet more. Live more. Lende.</h1>
                            </div>
                        </div>
                        <Container className="page-middle">
                            <Row className="justify-content-center">
                                <Col lg="12">
                                    <h1 className="text-center">Enhance your life with Lende</h1>
                                    <Row className="grid-row justify-content-center">
                                        <Col lg="3">
                                            <div className="info">
                                                <h4 className="info-title icon_color1 text-center">Do More</h4>
                                                <hr className="horizontal-line"/>
                                                <p className="text-white">
                                                    With easy access to equipment at affordable prices, the
                                                    possibilities are
                                                    endless.
                                                </p>
                                            </div>
                                        </Col>
                                            <div className="info">
                                                <h4 className="info-title icon_color2 text-center">Meet New People</h4>
                                                <hr className="horizontal-line"/>
                                                <p className="text-white">
                                                    Meet others in your neighborhood who may have similar interests
                                                    as you!
                                                </p>
                                            </div>
                                        <Col lg="3">
                                            <div className="info">
                                                <h4 className="info-title icon_color3 text-center">Earn Money</h4>
                                                <hr className="horizontal-line"/>
                                                <p className="text-white">
                                                    Lend your goods to others and receive a small commission without
                                                    doing anything!
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                            <center className = 'page-end'>
                                <h1 className="text-center text-white">Explore</h1>
                                {pages.map((items) =>
                                    <SquareTestimonial align={items.align} name={items.name} text={items.text} image={items.image} size={{width: "650px", height: "150px"}}/>
                                )}
                            </center>
                    </div>
            );
    }
}

export default Home;
