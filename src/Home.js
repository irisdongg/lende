import React from "react";
import "./Home.css";
import lendelogo from './lendelogo.png';
import "./App.css";
import lendhands from './lendhands.jpg'
import nearby from './nearby.jpg';
import sports from './sports.jpg';
import kitchen from './cooking.jpg';
import tools from './tools.jpg';

import {
    Container,
    Row,
    Col
} from "reactstrap";

import HoverCard from "./HoverCard";

class Home extends React.Component {
            render() {
                return (
                    <>
                    <div>
                        <div className="page-header">
                            <div className="content-center">
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
                                                    <p className="info-text-color">
                                                        With easy access to equipment at affordable prices, the possibilities are
                                                        endless.
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col lg="3">
                                                <div className="info">
                                                    <h4 className="info-title icon_color2 text-center">Meet New People</h4>
                                                    <hr className="horizontal-line"/>
                                                    <p className="info-meet-people-color">
                                                        Meet others in your neighborhood who may have similar interests
                                                        as you!
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col lg="3">
                                                <div className="info">
                                                    <h4 className="info-title icon_color3 text-center">Earn Money</h4>
                                                    <hr className="horizontal-line"/>
                                                    <p className="info-earn-color">
                                                        Lend your goods to others and receive a small commission without
                                                        doing anything!
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className="page-end">
                                <Row className="justify-content-center">
                                    <h1 className="text-center">Explore</h1>
                                    <Col>
                                        <Row className="grid-row justify-content-center">
                                            <Col> <img src={nearby}/> </Col>
                                            <Col> <img src={sports} /> </Col>
                                            <Col> <img src={kitchen} /> </Col>
                                            <Col> <img src={tools} /> </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </>
            );
    }
}

export default Home;
