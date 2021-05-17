import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './index.css';
import classNames from "classnames";
import { Navbar, Container, Row, Col, Badge } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export const Nav = () => {

  return(
    <Container fluid>
      <Navbar variant="light" fill fixed="top" expand="lg">
        <Col xs={8}> <Navbar.Brand><h3 class='custom-badge'><Badge variant="dark">Evan Haralampoudis</Badge></h3></Navbar.Brand> </Col>
        <Col> <Navbar.Text className="navigators"><Link exact to="/">Home</Link></Navbar.Text></Col>
        <Col> <Navbar.Text className="navigators"><Link to="/Personal">Personal</Link></Navbar.Text> </Col>
        <Col> <Navbar.Text className="navigators"><Link to="/Professional">Professional</Link></Navbar.Text> </Col>
      </Navbar>
    </Container>
  )
}