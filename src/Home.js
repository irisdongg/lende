import React from "react";
import "./Home.css";
import logo from './logo.svg';
import "./App.css";
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
                                <Row className=" grid-row justify-content-between align-items-center text-left">
                                    <Col lg="6" md="6">
                                        <h1 className="text-dark">
                                            We keep your coin <br />
                                            <span className="text-dark">secured</span>
                                        </h1>
                                        <p className="text-dark text-left">
                                            Tempo momento presto
                                        </p>
                                    </Col>
                                    <Col lg="4" md="5">
                                        <img src={logo} className="App-logo" alt="logo" />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div>
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg="12">
                                        <h1 className="text-center">Enhance your life with Momento</h1>
                                        <Row className="grid-row justify-content-center">
                                            <Col lg="3">
                                                <div className="info">
                                                    <div className="icon_color1">
                                                        <i className="tim-icons icon-money-coins"/>
                                                    </div>
                                                    <h4 className="info-title icon_color1">Do More</h4>
                                                    <hr className="line-primary"/>
                                                    <p>
                                                        Divide details about your work into parts. Write a few
                                                        lines about each one. A paragraph describing a feature
                                                        will.
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col lg="3">
                                                <div className="info">
                                                    <div className="icon_color2">
                                                        <i className="tim-icons icon-chart-pie-36"/>
                                                    </div>
                                                    <h4 className="info-title icon_color2">Meet New People</h4>
                                                    <hr className="line-warning"/>
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
                                                        <i className="tim-icons icon-single-02"/>
                                                    </div>
                                                    <h4 className="info-title icon_color3">Earn Money</h4>
                                                    <hr className="line-success"/>
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
                        </div>
                    </div>

            );
    }
}

export default Home;
