import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';
import Typical from 'react-typical';

export const Home = () => {
    return(
      <center>
      <Container fluid className='center-container'>
          <Typical
        steps={['Welcome to my site!', 2000, 'Find out about my music taste...', 1500, 'Or my assassin game!', 1500, 'Stay a while', 1000]}
        loop={1}
        wrapper='h1'/>
        <p className="lower-text">"Yee Yurr" -Evan Haralampoudis</p>
      </Container>
      </center>
    )
  }