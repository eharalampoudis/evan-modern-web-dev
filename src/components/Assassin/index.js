import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import classNames from "classnames";
import './index.css';
import Typical from 'react-typical';
import { Container, Row, Col } from 'react-bootstrap';

export const Assassin = () => {
    return(
        <Container fluid className='center-container'>
            <center>
                <Typical
                steps={['Assassin stats:', 1500, 
                    '6 Kills total:', 1000, '3 for me...', 1000, '3 for my partner', 1000, 'We are leading the pack in kills', 1000,
                    'I have been revived twice.', 1500, '(After being murdered in my sleep)', 1000,
                    '20 players remain', 1000, 'Last kill will be mine...', 1000]}
                loop={1}
                wrapper='h1'/>
                <p>Find out about my assassin journey below...</p>
            </center>
        </Container>
    )
}