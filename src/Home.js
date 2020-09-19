import React from "react";
import "./Home.css";
import logo from './logo.svg';
import "./App.css";
// react plugin used to create charts
// reactstrap components
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

// core components

class Home extends React.Component {
            render() {
                return (
            <>
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
            </>
            );
    }
}

export default Home;
