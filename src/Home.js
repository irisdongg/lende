import React from "react";
import "./Home.css";
import lendelogo from './lendelogo.png';
import "./App.css";
import lendhands from './lendhands.jpg'
import {
    Container,
    Row,
    Col
} from "reactstrap";

class Home extends React.Component {
            render() {
                return (
                    <div>
                        <div className="page-header">
                            <div className="content-center">
                                <h1 className="text-center">Do more. Meet more. Live more. Lende.</h1>
                            </div>
                        </div>
                        <div>
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
                                                        Rent a bike. Rent a stand mixer. Do things you have not been able
                                                        do before. Make things you have never made before. With easy
                                                        access to equipment at affordable prices, the possibilities are
                                                        endless.
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col lg="3">
                                                <div className="info">
                                                    <h4 className="info-title icon_color2 text-center">Meet New People</h4>
                                                    <hr className="horizontal-line"/>
                                                    <p>
                                                        Divide details about your product or agency work into
                                                        parts. Write a few lines about each one. A paragraph
                                                        describing feature will be a feature.
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col lg="3">
                                                <div className="info">
                                                    <div className="icon_color3">
                                                    </div>
                                                    <h4 className="info-title icon_color3 text-center">Earn Money</h4>
                                                    <hr className="horizontal-line"/>
                                                    <p>
                                                        Divide details about your product or agency work into
                                                        parts. Write a few lines about each one. A paragraph
                                                        describing be enough.
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row className="justify-content-center">
                                    <h1 className="text-center">Explore</h1>
                                    <Col>
                                        <Row className="grid-row justify-content-center">
                                            <Col lg="2">
                                                <div className="explore">
                                                    <div className="explore_color1">
                                                    </div>
                                                    <h4 className="info-title icon_color1 text-center">Near Me</h4>
                                                    <hr className="horizontal-line"/>
                                                    <p>
                                                        Divide details about your work into parts. Write a few
                                                        lines about each one. A paragraph describing a feature
                                                        will.
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col lg="2">
                                                <div className="explore">
                                                    <h4 className="info-title icon_color2 text-center">Category</h4>
                                                    <hr className="horizontal-line"/>
                                                    <p>
                                                        Divide details about your product or agency work into
                                                        parts. Write a few lines about each one. A paragraph
                                                        describing feature will be a feature.
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

            );
    }
}

export default Home;
