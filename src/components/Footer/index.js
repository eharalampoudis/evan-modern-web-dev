import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import classNames from "classnames";
import Typical from 'react-typical';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export const Footer = () => {
return(
    <Container>  
        <Navbar fixed='bottom' expand="md" bg='dark' variant='dark'>
            <Col xs={8}> <Navbar.Brand>EH</Navbar.Brand> </Col>
            <Col> <Navbar.Text className="navigators"><Link>Instagram</Link></Navbar.Text></Col>
            <Col> <Navbar.Text className="navigators"><Link>Spotify</Link></Navbar.Text> </Col>
            <Col> <Navbar.Text className="navigators"><Link>LinkedIn</Link></Navbar.Text> </Col>
        </Navbar>
    </Container>
)
}