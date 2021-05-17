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
        steps={['Assassin stats:', 1500, '6 Kills', 1000, '20 people left', 1000, 'May the best player win', 1000]}
        loop={2}
        wrapper='h1'/>
        <p className="lower-text">Yee Yurr</p>
      </Container>
      </center>
    )
  }