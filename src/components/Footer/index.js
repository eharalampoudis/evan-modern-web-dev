import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './index.css';
import classNames from "classnames";
import { Navbar, Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
return(
    <Container>  
        <Navbar fixed='bottom' expand="md" className='footer'>
            <Col xs={10}> <Navbar.Brand className='initials'>EH</Navbar.Brand> </Col>
            <Col> <Navbar.Text className="navigators">
                <a target='_blank' href='https://www.instagram.com/e.haralampoudis/'>
                    <img src='https://evan-modern-web-dev.s3.amazonaws.com/Instagram_Logo.png' className='logos'/>
                </a>
                </Navbar.Text>
            </Col>
            <Col> <Navbar.Text className="navigators">
                <a target="_blank" href='https://open.spotify.com/user/e.haralampoudis?si=RIS_J2HDRF2DAiCC2iCB1g'>
                    <img src='https://evan-modern-web-dev.s3.amazonaws.com/Spotify_Logo.png' className='logos'/>
                </a>
                </Navbar.Text> 
            </Col>
            <Col> <Navbar.Text className="navigators">
                <a target='_blank' href='http://linkedin.com/in/evan-haralampoudis-0a294a1b8'>
                    <img src='https://evan-modern-web-dev.s3.amazonaws.com/LinkedIn_Logo.png' className='logos' />
                </a>
                </Navbar.Text> </Col>
        </Navbar>
    </Container>
)
}