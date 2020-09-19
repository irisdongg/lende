import React from "react";
import "./Home2.css";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    ListGroupItem,
    ListGroup,
    Container,
    Row,
    Col
} from "reactstrap";

class Home2 extends React.Component {
    render() {
        return (
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
        );
    }
}

export default Home2;