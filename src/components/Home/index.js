import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';
import Typical from 'react-typical';

export const Home = () => {
    return(
      <center>
      <Container fluid className="center-container">
          <Typical
        steps={['I am', 1000, 'I am an assassin!', 1500, 'I am', 300, 'I am sure!', 1500, 'I am', 300, 'I am Evan!', 1500]}
        loop={2}
        wrapper='h1'/>
        <p className="poop">Yee Yurr</p>
      </Container>
      </center>
    )
  }