import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './index.css';
import ParticlesBg from 'particles-bg';
import { Container, Row, Col } from 'react-bootstrap';
import Typical from 'react-typical';



export const Background = () => {
  return(
    <Container className = 'custom-container'>
      <ParticlesBg type='cobweb' color='#6c757d' bg={true}/>
    </Container>
  )
}

